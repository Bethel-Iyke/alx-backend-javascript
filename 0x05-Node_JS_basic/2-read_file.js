/*  A program that counts students from a database and throws an error message if it couldnt access the database */ 
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;