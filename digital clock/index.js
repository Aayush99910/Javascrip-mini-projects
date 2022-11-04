// getting elements from the DOM
const hourEl = document.querySelector("#hour-id");
const minEl = document.querySelector("#minute-id");
const secEl = document.querySelector("#second-id");
const amEl = document.querySelector(".am-pm");

//updates the date every second
function updateClock() {
    var date = new Date();
    var hour = new Date().getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hour > 12){
        hour = hour - 12;
        amEl.textContent = "PM";
    }

    hourEl.textContent = hour;
    minEl.textContent = minutes;
    secEl.textContent = seconds;
}


// calling the updateClock function every 1 second 
setInterval(updateClock, 1000);
