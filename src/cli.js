import readlineSync from 'readline-sync';

const brainGame = () => {
    console.log('Welcome to the Brain Games!');
    let username = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${username}!`);
};
export default brainGame;