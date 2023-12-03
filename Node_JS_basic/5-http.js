const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(process.argv[2]);
      res.write(`${students.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
  }
  res.end();
});

app.listen(1245);

module.exports = app;
