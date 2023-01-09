import gameLogic from '../index.js';

const progression = () => {
  const gameNote = 'What number is missing in the progression?';
  const progTask = () => {
    const array = [];
    const num1 = Math.floor(Math.random() * 13);
    const diff = Math.floor(Math.random() * 11);
    array.push(num1);
    for (let i = 1; i <= 9; i += 1) {
      const num = array[i - 1] + diff;
      array.push(num);
    }
    const randomIndex = Math.floor(Math.random() * 10);
    const result = array.splice(randomIndex, 1, '..').toString();
    const question = array.join(' ');
    return [question, result];
  };

  gameLogic(gameNote, progTask);
};

export default progression;
