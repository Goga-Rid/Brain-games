import readlineSync from 'readline-sync';

const countRounds = 3;

const startGame = (description, freshRound) => {
    console.log('Welcome to the Brain Games!');
    let username = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${username}!`);
    console.log(description);
    for (let i = 0; i < countRounds; i += 1){
        const [question, corrAnswer] = freshRound();
        console.log(`Question: ${question}`);
        let userAnswer = readlineSync.question('Your answer: ');
        
        if (corrAnswer !== userAnswer){
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corrAnswer}'.`);
            console.log(`Let's try again, ${username}!`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${username}!`);
};

export default startGame;