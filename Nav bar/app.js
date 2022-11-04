// getting all the elements from the DOM
const middleContainer = document.querySelector("#middle");
const toggleBtn = document.querySelector("#toggle-btn");
 

toggleBtn.addEventListener("click", () => {
    if (middleContainer.classList.contains("show-links")) {
        middleContainer.classList.remove("show-links");
        middleContainer.style.height = "0px";
    }
    else { 
        middleContainer.classList.add("show-links");
        middleContainer.style.height = "150px";
    }
});