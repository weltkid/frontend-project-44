import gameLogic from '../index.js';

const findGcd = () => {
  const gameNote = 'Find the greatest common divisor of given numbers.';
  const gcdTask = () => {
    const num1 = Math.floor(Math.random() * 31);
    const num2 = Math.floor(Math.random() * 31);
    const question = `${num1} ${num2}`;
    const dividers1 = [];
    const dividers2 = [];
    for (let div = 1; div <= num1; div += 1) {
      if (num1 % div === 0) {
        dividers1.push(div);
      }
    }
    for (let div = 1; div <= num2; div += 1) {
      if (num2 % div === 0) {
        dividers2.push(div);
      }
    }
    const sameDividers = [];
    for (let i = 0; i < dividers1.length; i += 1) {
      for (let j = 0; j < dividers2.length; j += 1) {
        if (dividers1[i] === dividers2[j]) {
          sameDividers.push(dividers1[i]);
          dividers2.splice(j, 1);
          break;
        }
      }
    }
    const result = Math.max(...sameDividers).toString();
    return [question, result];
  };
  gameLogic(gameNote, gcdTask);
};

export default findGcd;
