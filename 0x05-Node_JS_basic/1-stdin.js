// Using Process stdin

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  // const name = process.stdin.read();
  process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});