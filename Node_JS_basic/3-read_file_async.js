const fs = require('fs').promises;

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((fileContent) => {
        const arrayOfLines = fileContent.split('\r\n');
        const arrayOfHeaders = arrayOfLines[0].split(',');

        const arraysOfRecords = arrayOfLines.slice(1)
          .filter((row) => row.trim() !== '')
          .map((row) => row.split(','));

        const arrayOfStudentObjects = arraysOfRecords.map((array) => {
          const obj = {};
          arrayOfHeaders.forEach((key, index) => {
            obj[key] = array[index];
          });
          return obj;
        });

        const total = `Number of students: ${arrayOfStudentObjects.length}`;
        console.log(total);

        const allFieldNames = arrayOfStudentObjects
          .map((obj) => obj.field);

        const fieldNames = new Set(allFieldNames);

        // Object, where fieldName is the key and an array of firstnames is the value
        const fieldsObject = {};

        for (const fieldName of fieldNames) {
          const filteredNames = arrayOfStudentObjects
            .filter((obj) => obj.field === fieldName)
            .map((obj) => obj.firstname);

          fieldsObject[fieldName] = filteredNames;
        }

        const results = [];
        results.push(total);

        Object.keys(fieldsObject).forEach((FIELD) => {
          const LIST_OF_FIRSTNAMES = fieldsObject[FIELD].join(', ');
          const result = `Number of students in ${FIELD}: ${fieldsObject[FIELD].length}. List: ${LIST_OF_FIRSTNAMES}`;
          results.push(result);
          console.log(result);
        });

        resolve(results);
      })

      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
