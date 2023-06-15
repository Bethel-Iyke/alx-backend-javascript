const fs = require('fs');

function readDatabase(path) {
  const content = fs.readFileSync(path, 'utf8').split('\n');

  const students = content.filter((item) => item).map((item) => item.split(','));

  const fields = {};
  for (const student of students) {
    if (student[3]) {
      fields[student[3]] = fields[student[3]] || [];
      fields[student[3]].push(student[0]);
    }
  }

  delete fields.field;

  return fields;
}

export default readDatabase;
