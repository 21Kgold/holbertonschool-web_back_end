const http = require('http');
const { countStudents } = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const students = await countStudents('database.csv');
      res.end(`This is the list of our students ${students}`);
    } catch (error) {
      res.end('Error reading file');
    }
  } else {
    res.end('404, Resource Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server listening at port 1245');
});

module.exports = app;
