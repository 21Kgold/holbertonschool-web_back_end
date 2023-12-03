const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(process.argv[2]);
      if (students) {
        res.write(`${students.join('\n')}`);
      } else {
        res.end('No students found');
      }
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.end('404, Resource Not Found');
  }
  res.end();
});

app.listen(1245);

module.exports = app;
