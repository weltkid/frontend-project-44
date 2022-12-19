import gameLogic from '../index.js';

const evenGame = () => {
  const gameNote = 'Answer "yes" if the number is even, otherwise answer "no".';
  const evenTask = () => {
    const number = Math.floor(Math.random() * 31);
    const question = number;
    let result;
    if (number % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return [question, result];
  };

  gameLogic(gameNote, evenTask);
};

export default evenGame;
