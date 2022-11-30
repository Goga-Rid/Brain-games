import readlineSync from 'readline-sync';

const main = () => {
    console.log('Welcome to the Brain Games!');
    let username = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${username}!`);
};
export default main;