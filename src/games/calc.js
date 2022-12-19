import gameLogic from '../index.js';

const calc = () => {
  const gameNote = 'What is the result of the expression?';
  const calcTask = () => {
    const operators = ['+', '-', '*'];
    const rand = Math.floor(Math.random() * 3);
    const randomOper = operators[rand];
    const num1 = Math.floor(Math.random() * 31);
    const num2 = Math.floor(Math.random() * 31);
    const question = `${num1} ${randomOper} ${num2}`;
    let result;
    if (randomOper === '+') {
      result = num1 + num2;
      result = result.toString();
    } else if (randomOper === '-') {
      result = num1 - num2;
      result = result.toString();
    } else {
      result = num1 * num2;
      result = result.toString();
    }
    return [question, result];
  };

  gameLogic(gameNote, calcTask);
};

export default calc;
