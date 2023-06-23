const fsPromises = require('fs').promises;
const express = require('express');

const app = express();
const { argv } = process;
if (argv.length < 2) {
  argv[2] = '';
}

async function countStudents(path) {
  const result = [];
  try {
    const data = await fsPromises.readFile(path, 'utf-8');
    const lines = data.split('\n');
    const rows = lines.slice(1, -1);
    // console.log(rows);
    const totalStudent = rows.length;
    const fields = {};
    for (const row of rows) {
      const studentInfo = row.split(',');
      const field = studentInfo.slice(-1);
      // console.log(field)
      if (!(field[0] in fields) && field[0] !== '') {
        fields[field[0]] = {};
        fields[field[0]].count = 1;
        fields[field[0]].firstName = [];
        fields[field[0]].firstName.push(studentInfo[0]);
      } else if (field[0] !== '') {
        fields[field[0]].count += 1;
        fields[field[0]].firstName.push(studentInfo[0]);
      }
    }
    // console.log(`Number of students: ${totalStudent}`);
    result.push(`Number of students: ${totalStudent}`);
    for (const [field, value] of Object.entries(fields)) {
      const list = value.firstName.join(', ');
      // console.log(`Number of students in ${field}: ${fields[field].count}. List: ${list}`);
      result.push(`Number of students in ${field}: ${fields[field].count}. List: ${list}`);
    }
    // console.log(fields)
  } catch (err) {
    // console.error(err);
    return new Error('Cannot load the database').message;
  }
  return (result.join('\n'));
}

const hostname = 'localhost';
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  // res.send('This is the list of our students\n');
  try {
    const studentInfo = await countStudents(argv[2]);
    res.send(`This is the list of our students\n${studentInfo}`);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, hostname, () => {
  console.log(`App running on http://${hostname}:${port}`);
});
module.exports = app;

// const express = require('express');

// const args = process.argv.slice(2);
// const countStudents = require('./3-read_file_async');

// const DATABASE = args[0];

// const app = express();
// const port = 1245;

// app.get('/', (req, res) => {
//  res.send('Hello Holberton School!');
// });

// app.get('/students', async (req, res) => {
//  const msg = 'This is the list of our students\n';
//  try {
//    const students = await countStudents(DATABASE);
//    res.send(`${msg}${students.join('\n')}`);
//  } catch (error) {
//    res.send(`${msg}${error.message}`);
//  }
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// module.exports = app;
