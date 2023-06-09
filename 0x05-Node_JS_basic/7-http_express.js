// Complex server with express

const express = require('express');

const port = 1245;
const app = express();
const readFileAsync = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = process.argv[2];
    let output = '';

    // Override console.log
    const originalLog = console.log;
    console.log = function (message) {
      output += message;
    };

    // Call readFileAsync and capture console output
    const result = await readFileAsync(data);

    // Restore the original console.log
    console.log = originalLog;

    res.send(`This is the list of our students\n${output}`);
  } catch (err) {
    res.send(err);
  }
});
// Overide console.log
//   let output = "";
//   const originalLog = console.log;
//   console.log = function (message) {
//     output += message + "\n";
//   };
//   console.log = originalLog;

//   readFileAsync(data)
//     .then((result) => {
//       //   console.log = originalLog;
//       res.send(`This is the list of our students\n${result}`);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

app.listen(port);

module.exports = app;