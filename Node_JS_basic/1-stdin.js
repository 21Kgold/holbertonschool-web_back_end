const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name? ', (name) => {
  if (name.toLowerCase() === 'exit' || name.toLowerCase() === 'quit') {
    console.log('This important software is now closing');
    process.exit();
  } else {
    console.log(`Your name is: ${name}`);
  }
});
