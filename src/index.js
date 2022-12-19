import readlineSync from 'readline-sync';

const gameLogic = (gameNote, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameNote);
  let correct = 0;
  while (correct < 3) {
    const arrayOfQandR = task();
    const question = arrayOfQandR[0];
    const result = arrayOfQandR[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      console.log('Correct!');
      correct += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correct === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gameLogic;
