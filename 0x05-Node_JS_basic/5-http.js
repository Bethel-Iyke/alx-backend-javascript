/* In a file named 5-http.js, create a small HTTP server using the http module:

It should be assigned to the variable app and this one must be exported
HTTP server should listen on port 1245
It should return plain text
When the URL path is /, it should display Hello Holberton School! in the page body
When the URL path is /students, it should display This is the list of our students
followed by the same content as the file 3-read_file_async.js (with and without the database)
- the name of the database must be passed as argument of the file
CSV file can contain empty lines (at the end) -
and they are not a valid student! */

const http = require('http');

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      try {
        if (err) throw new Error('Cannot load the database');
        const lines = data.split('\n');
        lines.shift();
        let info = '';
        let count = lines.length;
        if (lines[lines.length - 1] === '') {
          count -= 1;
        }
        const fields = {};
        for (const line of lines) {
          if (fields[line.split(',')[3]] === undefined) {
            fields[line.split(',')[3]] = [];
          }
          if (line.split(',')[0] !== 'firstname') {
            fields[line.split(',')[3]].push(line.split(',')[0]);
          }
        }
        info += `Number of students: ${count}\n`;
        for (const field of Object.keys(fields)) {
          if (field) {
            info += `Number of students in ${field}: ${
              fields[field].length}. List: ${fields[field].join(', ')}\n`;
          }
        }
        resolve(info);
      } catch (err) {
        reject(err);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((info) => {
      const data = info.slice(0, -1);
      res.end(data);
    })
      .catch((error) => {
        res.end(error.message);
      });
  }
});

app.listen(1245);

module.exports = app;
