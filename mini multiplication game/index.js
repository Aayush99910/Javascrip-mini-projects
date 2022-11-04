
let score = 0;
let array = [];

//getting the elements from the DOM
const scoreEl = document.querySelector(".score");
const questionEl  = document.querySelector(".question");
const userInputEl = document.querySelector("#input-id");
const checkButton = document.querySelector("#check-btn");
const answerEl = document.querySelector(".answer");

// generating random number from 1 to 10
function getRandomNumber() {
    let randomNumber = Math.floor( Math.random() * 10 ) + 1;
    return randomNumber;
}

// making a random question
function getQuestion() {
    array = [];
    let num1 = getRandomNumber();
    let num2 = getRandomNumber();

    array.push(num1);
    array.push(num2);
    questionEl.textContent = `What is ${num1} multiplied by ${num2}?`;
}

// checks if the user's answer is correct or not
function checkAnswer() {
    answerEl.textContent = " ";
    let correctanswer = array[0] * array[1];
    let userAnswer = Number(userInputEl.value);
    
    if (userAnswer === 0) {
        answerEl.textContent = "It's not a empty field. : ("
    }else if (userAnswer === correctanswer) {
        score++;
        answerEl.textContent = "Correct!" 
    }else {
        score--;
        answerEl.textContent = `The correct answer is ${correctanswer}.`
    }

    updateScore();
    getQuestion();
    userInputEl.value = " ";
}

// updates the score
function updateScore() {
    scoreEl.textContent = `Score: ${score}`
}

window.addEventListener("load", getQuestion);

checkButton.addEventListener("click", checkAnswer);