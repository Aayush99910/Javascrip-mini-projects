// getting all the element
const input = document.querySelector("#contact");
const listItems = document.querySelectorAll(".list-item");


// filters the item
function filterItem(e) {
    let userInput = e.target.value.toLowerCase(); // getting the userinput everytime they keyup

    // converting the htmlcollection to array
    Array.from(listItems).forEach(function(item) {
        let itemName = item.firstChild.textContent.toLowerCase();
        if (itemName.indexOf(userInput) != -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

// event listenere for input
input.addEventListener("keyup", filterItem);

// searching throgh t elist and comparing 