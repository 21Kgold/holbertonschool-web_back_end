import redis from 'redis';

const client = redis.createClient();

client.on('error', (errorMessage) => {
  console.log(`Redis client not connected to the server: ${errorMessage}`);
});

client.on('ready', () => {
  console.log('Redis client connected to the server');
});

client.hset('HolbertonSchools', 'Portland', '50', redis.print);
client.hset('HolbertonSchools', 'Seattle', '80', redis.print);
client.hset('HolbertonSchools', 'New York', '20', redis.print);
client.hset('HolbertonSchools', 'Bogota', '20', redis.print);
client.hset('HolbertonSchools', 'Cali', '40', redis.print);
client.hset('HolbertonSchools', 'Paris', '2,', redis.print);
client.hgetall('HolbertonSchools', (error, reply) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(reply);
  }
});