const colorArray = ["red", "green", "blue"];
let i = 0;
// getting all the elements from the DOM
const bodyEl = document.querySelector("body");
const changeColorBtn = document.querySelector("#change-color-id");
const spanEl = document.querySelector("#color-id");

// two ways of doing this problem
function changeColor1 () { 
    if (i === 0) {
        bodyEl.style.backgroundColor = colorArray[0];
        spanEl.textContent = colorArray[0];
        i++;
    }
    else if (i === 1) {
        bodyEl.style.backgroundColor = colorArray[1];
        spanEl.textContent = colorArray[1];
        i++;
    }
    else if (i === 2) {
        bodyEl.style.backgroundColor = colorArray[2];
        spanEl.textContent = colorArray[2];
        i = 0;
    }
}


// better way
function changeColor() {
    let randomNum = getRandomNumber();

    bodyEl.style.backgroundColor = colorArray[randomNum];
    spanEl.textContent = colorArray[randomNum];
}

function getRandomNumber() {
    let randomNum = Math.floor( Math.random() * 3 );
    return randomNum;
}

changeColorBtn.addEventListener("click", changeColor);