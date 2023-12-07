import redis from 'redis';

const suscriber = redis.createClient();
suscriber.subscribe('holberton school channel');

suscriber.on('error', (errorMessage) => {
  console.log(`Redis client not connected to the server: ${errorMessage}`);
});

suscriber.on('ready', () => {
  console.log("Redis client connected to the server");
});

suscriber.on('message', (chanel, message) => {
  if (message === 'KILL_SERVER') {
    suscriber.unsubscribe('holberton school channel');
    suscriber.quit();
  } console.log(message);
});
