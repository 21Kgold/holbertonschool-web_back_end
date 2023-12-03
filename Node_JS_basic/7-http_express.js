const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const firstLine = 'This is the list of our students\n';
  try {
    const students = await countStudents(process.argv[2]);
    res.send(`${firstLine}${students.join('\n')}`);
  } catch (error) {
    res.send(`${firstLine}${error.message}`);
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
