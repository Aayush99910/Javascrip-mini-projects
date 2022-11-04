const Array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// getting all the elements from the DOM
const bodyEl = document.querySelector("body");
const changeColorBtn = document.querySelector(".click-me-btn");
const spanEl = document.querySelector("#color-id");

// changes color
function changeColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let randomNum = getRandomNumber();
        color += Array[randomNum];
    }
    bodyEl.style.backgroundColor = color;
    spanEl.textContent = color;
}


// returns random number from 0 to Array.length
function getRandomNumber() {
    let randomNum = Math.floor( Math.random() * Array.length );
    return randomNum;
}

changeColorBtn.addEventListener("click", changeColor);