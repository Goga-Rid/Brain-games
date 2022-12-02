import startGame from "../index.js";
import genRandNum from "../genRandNum.js";

const description = "Find the greatest common divisor of given numbers.";

const gcdLogic = (numOne, numTwo) =>{
    if (!numTwo){
        return numOne;
    }
    return gcdLogic(numTwo, numOne % numTwo);
}

const rulQuestAndAns = () => {
    const valueFirst = genRandNum(1, 100);
    const valueSec = genRandNum(1, 100);
    const question = `${valueFirst} ${valueSec}`;
    const answer = String(gcdLogic(valueFirst, valueSec));
    return [question, answer];
}

const gcdGame = () => {
    startGame(description, rulQuestAndAns);
}

export default gcdGame;