// getting elements from the DOM
let vowelCount = 0;
let consonantCount = 0;
const textEl = document.querySelector("#story");
const submitButton = document.querySelector(".submit-btn");
const msgEl = document.querySelector("#msg");

// checks for vowel in the sentence and updates the msg in the DOM
function checkVowelAndUpdateMsg() {
    // everytime user clicks the button the counts are set to zero
    vowelCount = 0 ;
    consonantCount = 0;
    let sentence = textEl.value;
    
    // looping through each letter
    for (let i = 0; i < sentence.length; i++) {
        // if the letter is a
        if (sentence[i] === "a" || sentence[i] === "A") {
            vowelCount++;
        }
        // if the letter is e
        else if (sentence[i] === "e" || sentence[i] === "E") {
            vowelCount++;
        }
        // if the letter is i
        else if (sentence[i] === "i" || sentence[i] === "I") {
            vowelCount++;
        }
        // if the letter is o
        else if (sentence[i] === "o" || sentence[i] === "O") {
            vowelCount++;
        }
        // if the letter is u
        else if (sentence[i] === "u" || sentence[i] === "U") {
            vowelCount++;
        }
    }

    msgEl.textContent = `There are ${vowelCount} vowels.`
}

// updates the msg back to Type your sentence here after 3 secs;
function updateMsg() {
    msgEl.textContent = `Type your sentence here:`
}

setInterval(updateMsg, 3500);

submitButton.addEventListener("click", checkVowelAndUpdateMsg);