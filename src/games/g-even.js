import startGame from "../index.js";
import genRandNum from "../genRandNum.js";
import { question } from "readline-sync";

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const rulEvenGame = (num) => num % 2 === 0;

const rulQuestAndAns = () => {
    const numQuestion = genRandNum(1, 50);
    const answer = rulEvenGame(numQuestion) ? 'yes' : 'no';
    return [numQuestion, answer];
};

const evenGame = () => {
    startGame(description, rulQuestAndAns);
}
export default evenGame;