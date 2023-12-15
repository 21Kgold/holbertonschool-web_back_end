import redis from 'redis';
import util from 'util';

const client = redis.createClient();
const getAsync = util.promisify(client.get).bind(client);

client.on('error', (errorMessage) => {
  console.log(`Redis client not connected to the server: ${errorMessage}`);
});

client.on('ready', () => {
  console.log('Redis client connected to the server');
});

function setNewSchool(myKey, myValue) {
  client.set(myKey, myValue, (error, reply) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Reply: ${reply}`);
    }
  });
}

async function displaySchoolValue(myKey) {
  try {
    const value = await getAsync(myKey);
    console.log(value);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
