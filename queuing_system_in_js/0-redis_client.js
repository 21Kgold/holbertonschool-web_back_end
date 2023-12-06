import redis from 'redis';

const client = redis.createClient();

client.on("error", (errorMessage) => {
  console.log(`Redis client not connected to the server: ${errorMessage}`);
});

client.on("ready", () => {
  console.log("Redis client connected to the server");
});
