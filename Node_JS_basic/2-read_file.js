const fs = require('fs');
const csv = require('csv');

function countStudents(path) {
  if (path !== 'database.csv') {
    throw new Error('Cannot load the database');
  }
  let count = 0;
  const listCS = [];
  const listSWE = [];
  fs.createReadStream(path)
    .pipe(csv.parse({ delimiter: ',', from_line: 2 }))
    .on('data', (row) => {
      count += 1;
      if (row[3] === 'CS') listCS.push(row[0]);
      else if (row[3] === 'SWE') listSWE.push(row[0]);
    })
    .on('end', () => {
      console.log(`Number of students: ${count}`);
      console.log(`Number of students in CS: ${listCS.length}. List: ${listCS.join(', ')}`);
      console.log(`Number of students in SWE: ${listSWE.length}. List: ${listSWE.join(', ')}`);
    });
}

module.exports = countStudents;
