import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correct = 0;
  while (correct < 3) {
    const number = Math.floor(Math.random() * 31);
    console.log(`Question: ${number}`);
    const answer1 = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (answer1 === 'yes') {
        console.log('Correct!');
        correct += 1;
      } else {
        console.log(`"${answer1}" is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (answer1 === 'no') {
        console.log('Correct!');
        correct += 1;
      } else {
        console.log(`"${answer1}" is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }
  }
  if (correct === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
