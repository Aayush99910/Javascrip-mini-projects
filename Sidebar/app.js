// getting all the elements from the DOM
const navEl = document.querySelector("#nav-id");
const ulEl = document.querySelector("#ul-id");
const toggleBtn = document.querySelector("#toggle-id");

toggleBtn.addEventListener("click", () => {
    if (ulEl.classList.contains("show-sidebar")) {
        ulEl.classList.remove("show-sidebar");
        ulEl.style.height = "0px";
        navEl.style.backgroundColor = "rgb(170, 169, 169)";
        ulEl.style.animation = "fade-out 1s";
    }
    else {
        ulEl.classList.add("show-sidebar");
        ulEl.style.height = "400px";
        ulEl.style.animation = "fade-in 0.5s linear";
        navEl.style.backgroundColor = "white";
    }
});