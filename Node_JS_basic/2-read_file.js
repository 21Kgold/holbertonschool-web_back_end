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
  const NUMBER_OF_STUDENTS = arrayStudents.length;
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

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

  Object.keys(filteredArray).forEach((FIELD) => {
    let LIST_OF_FIRSTNAMES = '';
     filteredArray[FIELD].forEach((element) => {
      LIST_OF_FIRSTNAMES = `${LIST_OF_FIRSTNAMES + element}, `;
    });
    LIST_OF_FIRSTNAMES = LIST_OF_FIRSTNAMES.slice(0, -2);
    const NUMBER_OF_STUDENTS_FIELD = filteredArray[FIELD].length;
    console.log(`Number of students in ${FIELD}: ${NUMBER_OF_STUDENTS_FIELD}. List: ${LIST_OF_FIRSTNAMES}`);
  });
}

module.exports = countStudents;
