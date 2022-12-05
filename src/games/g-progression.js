import startGame from '../index.js';
import genRandNum from '../genRandNum.js';

const description = 'What number is missing in the progression?';

const progressLogic = (progressBegin, progressLength, stepProgress) => {
  let arr = [];
  for (let i = 0; i < progressLength; i += 1) {
    // ------ progression formation. ---------------
    arr.push(progressBegin + (i * stepProgress));
  }
  const pass = arr[Math.floor(Math.random() * arr.length)];
  arr[arr.indexOf(pass)] = '..';
  arr = String(arr.join(' '));
  return [arr, pass];
};

const rulQuestAndAns = () => {
  const progressBegin = genRandNum(1, 50);
  const progressLength = genRandNum(5, 10);
  const passNum = genRandNum(1, 10);
  const [question, currAnswer] = progressLogic(progressBegin, progressLength, passNum);
  const answer = String(currAnswer);
  return [question, answer];
};

const progressGame = () => {
  startGame(description, rulQuestAndAns);
};

export default progressGame;
