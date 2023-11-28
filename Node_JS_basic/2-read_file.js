const fs = require('fs');

function countStudents(filePath) {
  let contentString;

  try {
    contentString = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const linesArray = contentString.split('\n');
  const keysArray = linesArray[0].split(',');
  const recordsArray = linesArray.slice(1);

  // Create an array of arrays
  /* eslint-disable */
  const valuesArrays = recordsArray.map((row) => {
    if (row.trim() !== '') {
      return row.split(',');
    }
  });

  // Create an array of objects
  const arrayStudents = valuesArrays.map((valueArray) => {
    const obj = {};
    keysArray.forEach((key, index) => {
      obj[key] = valueArray[index];
    });
    return obj;
  });
  process.stdout.write(`Number of students: ${arrayStudents.length}\n`);

  // Array of field per student
  const fieldsStudents = arrayStudents.map((student) => student.field);

  // Clean repeated fields
  const fieldsSet = new Set(fieldsStudents);

  // Create object per field
  const filteredArray = {};

  for (const fieldName of fieldsSet) {
    const filteredNames = arrayStudents
      .filter((obj) => obj.field === fieldName)
      .map((obj) => obj.firstname);

    filteredArray[fieldName] = filteredNames;
  }

  Object.keys(filteredArray).forEach((key) => {
    let studentList = '';
     filteredArray[key].forEach((element) => {
      studentList = `${studentList + element}, `;
    });
    const newStudentList = studentList.slice(0, -2);
    process.stdout.write(`Number of students in ${key}: ${filteredArray[key].length}. List: ${newStudentList}\n`);
  });
}

module.exports = countStudents;
