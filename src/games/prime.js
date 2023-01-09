import gameLogic from '../index.js';

const prime = () => {
  const gameNote = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const primeTask = () => {
    let number = Math.floor(Math.random() * 32);
    let result;
    if (number === 0 || number === 1) {
      number = 4;
    }
    const question = number;
    if (number === 2 || number === 3) {
      result = 'yes';
    } else {
      for (let i = 2; i <= (number / 2); i += 1) {
        if (number % i === 0) {
          result = 'no';
          break;
        } else {
          result = 'yes';
        }
      }
    }
    return [question, result];
  };

  gameLogic(gameNote, primeTask);
};

export default prime;
