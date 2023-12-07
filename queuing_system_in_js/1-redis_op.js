import redis from 'redis';

const client = redis.createClient();

client.on("error", (errorMessage) => {
  console.log(`Redis client not connected to the server: ${errorMessage}`);
});

client.on("ready", () => {
  console.log("Redis client connected to the server");
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

function displaySchoolValue(myKey) {
  client.get(myKey, (error, reply) => {
    if (error) {
        console.log(`Error: ${error}`);
      } else {
          console.log(reply);
      }
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
