const fs = require('fs');

function countStudents(path) {
  //   fs.readFile(path, (err, data) => {
  //     if (err) {
  //       throw new Error("Cannot load the database");
  //     }
  //   });
  try {
    const data = fs.readFileSync(path);
    // if (!data) {
    // throw Error('Cannot load the database');
    // }

    // console.log(data.toString());
    const nameList = data
      .toString()
      .split('\n')
      .filter((name) => name.length > 0);
    // console.log(name_list);
    const students = nameList.length - 1;
    console.log(`Number of students: ${students}`);

    const CSname = [];
    const SWEname = [];

    nameList.forEach((element) => {
      if (element.includes('CS')) {
        CSname.push(element.split(',')[0]);
      } else if (element.includes('SWE')) {
        SWEname.push(element.split(',')[0]);
      }
    });

    console.log(
      `Number of students in CS: ${CSname.length}. List: ${CSname.join(', ')}`,
    );
    console.log(
      `Number of students in SWE: ${SWEname.length}. List: ${SWEname.join(
        ', ',
      )}`,
    );
  } catch (err) {
    throw Error('Cannot load the database');
  }

  //   console.log(CSname);
}

module.exports = countStudents;