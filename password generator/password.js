const characters = [
"A","B","C","D","E","F","G","H",
"I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z","a","b","c","d","e","f","g","h",
"i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z", "0", "1", "2", "3", "4", "5",
"6", "7", "8", "9","~","`","!","@","#","$","%","^",
"&","*","(",")","_","-","+","=","{","[","}","]",",",
"|",":",";","<",">",".","?","/"
];

// getting all the neccessary things from document
const generatePasswordButton = document.querySelector(".generate-password-btn");
var firstPassword = document.querySelector(".first-password");
var secondPassword = document.querySelector(".second-password");


function randomNumber() {
    let randomNum = Math.floor( Math.random()*characters.length ); 
    return randomNum;
}


function range(start, end) {
    const ans = [ ];

    for (let i = start; i <= end; i++) {
        ans.push(i);
    }

    return ans;
}


function getFirstPassword(){
    let password = "";

    for (i of range(0, 14)){
        let randomN = randomNumber();
        let randomChar =  characters[randomN];
        password += randomChar;
    }

    return password;
}


function getSecondPassword() {
    let password = "";

    for (i of range(0, 14)){
        let randomN = randomNumber();
        let randomChar =  characters[randomN];
        password += randomChar;
    }

    return password;
}


function getRandomPassword() {
    let firstPass = getFirstPassword();
    let secondPass = getSecondPassword();

    firstPassword.textContent = firstPass;
    secondPassword.textContent = secondPass;
}


// adding eventlistener in the generatePasswordButton 
generatePasswordButton.addEventListener("click", getRandomPassword);
