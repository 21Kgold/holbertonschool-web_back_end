const http = require('http');
const countStudents = require('./3-read_file_async');

const args = process.argv;
const databaseName = args[2];

if (args.length < 3) {
  console.error('Please provide the database name as an argument');
  process.exit(1);
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(databaseName);
      res.end(`${students.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.listen(1245);

module.exports = app;
