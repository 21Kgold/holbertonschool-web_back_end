import express from 'express';
import redis from 'redis';
import util from 'util';

const listProducts = [
  {
    Id: 1, name: 'Suitcase 250', price: 50, stock: 4,
  },
  {
    Id: 2, name: 'Suitcase 450', price: 100, stock: 10,
  },
  {
    Id: 3, name: 'Suitcase 650', price: 350, stock: 2,
  },
  {
    Id: 4, name: 'Suitcase 1050', price: 550, stock: 5,
  },
];

const updatedListProducts = listProducts.map((obj) => ({
  itemId: obj.Id,
  itemName: obj.name,
  price: obj.price,
  initialAvailableQuantity: obj.stock,
}));

function getItemById(id) {
  return updatedListProducts.find((obj) => obj.itemId === id);
}

const client = redis.createClient();
const getAsync = util.promisify(client.get).bind(client);

client.on('error', (errorMessage) => { console.log(`Redis client not connected to the server: ${errorMessage}`); });
client.on('ready', () => { console.log('Redis client connected to the server'); });

function reserveStockById(itemId, stock) {
  client.set(`item.${itemId}`, stock, (error, reply) => {
    if (error) {
      console.log(`Error: ${error}`);
    }
  });
}

function clearStockById(itemId) {
  client.del(`item.${itemId}`, (error, reply) => {
    if (error) {
      console.log(`Error: ${error}`);
    }
  });
}

async function getCurrentReservedStockById(itemId) {
  try {
    const reservedStock = await getAsync(`item.${itemId}`);
    return reservedStock;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

const app = express();

app.get('/list_products', (req, res) => {
  res.send(JSON.stringify(updatedListProducts));
});

app.get('/list_products/:itemId', async (req, res) => {
  const itemId = parseInt(req.params.itemId);
  const itemObj = getItemById(itemId);
  const stock = await getCurrentReservedStockById(itemId);

  if (!itemObj) {
    res.send(JSON.stringify({ status: 'Product not found' }));
    return;
  }

  if (stock === null) {
    reserveStockById(itemId, itemObj.initialAvailableQuantity);
  }

  itemObj.currentQuantity = parseInt(await getCurrentReservedStockById(itemId));
  res.send(JSON.stringify(itemObj));
});

app.get('/reserve_product/:itemId', async (req, res) => {
  const itemId = parseInt(req.params.itemId);
  const itemObj = getItemById(itemId);
  const stock = parseInt(await getCurrentReservedStockById(itemId));

  if (!itemObj) {
    res.send(JSON.stringify({ status: 'Product not found' }));
    return;
  }

  if (stock === null) {
    reserveStockById(itemId, itemObj.initialAvailableQuantity);
  } else if (stock < 1) {
    res.send(JSON.stringify({ status: 'Not enough stock available', itemId }));
  } else {
    reserveStockById(itemId, stock - 1);
    res.send(JSON.stringify({ status: 'Reservation confirmed', itemId }));
  }
});

app.listen(1245, () => {
  console.log('App listening on port 1245');
});
