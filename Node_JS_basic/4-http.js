const app = require('http');

const server = app.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

server.listen(1245, () => {
  console.log('Server listening at port 1245');
});

module.exports = app;
