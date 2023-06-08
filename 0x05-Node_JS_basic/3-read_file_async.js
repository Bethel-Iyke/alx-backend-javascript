/* Using the database database.csv (provided in project description),
create a function countStudents */

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      try {
        if (err) throw new Error('Cannot load the database');
        const lines = data.split('\n');
        lines.shift();
        let count = lines.length;
        if (lines[lines.length - 1] === '') {
          count -= 1;
        }
        console.log(`Number of students: ${count}`);
        const fields = {};
        for (const line of lines) {
          if (fields[line.split(',')[3]] === undefined) {
            fields[line.split(',')[3]] = [];
          }
          if (line.split(',')[0] !== 'firstname') {
            fields[line.split(',')[3]].push(line.split(',')[0]);
          }
        }
        for (const field of Object.keys(fields)) {
          if (field) {
            console.log(
              `Number of students in ${field}: ${
                fields[field].length
              }. List: ${fields[field].join(', ')}`,
            );
          }
        }
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  });
}

module.exports = countStudents;
