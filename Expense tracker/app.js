// get all the necessary elements from the DOM
// Model
let tableItems;
const moneySpentEl = document.querySelector("#money");
const dateEl = document.querySelector("#date");
const amountEl = document.querySelector("#amount");
const addButton = document.querySelector("#addButton");
const tableBody = document.querySelector("#table-body-id");
const clearAllButton = document.querySelector(".clear-all-btn");
const checked = document.querySelector("#dark-mode-id");
const spanEl = document.querySelector("#span");
const span2El = document.querySelector("#span2");
const trackMoneyEl = document.querySelector(".title");
const moneySpentText = document.querySelector("#moneySpentid");
const dateText = document.querySelector("#dateid");
const amountText = document.querySelector("#amountid");
const tableItemsFromLocal = JSON.parse(localStorage.getItem("tableItems")); 


const bodyEl = document.querySelector("#body");
// checks for the items in localStorage
if (tableItemsFromLocal){
    tableItems = tableItemsFromLocal;
} else {
    tableItems = [];
}

// renders the list
render();

// adds new items to the tbody
function addTableItems() {
    // getting the value from the input
    let moneySpent = moneySpentEl.value;
    let dateSelected = dateEl.value;
    let amount = amountEl.value;
    let date = new Date().getTime();

    tableItems.push({Title: moneySpent, Date: dateSelected, Amount: amount, id: date});
    saveTableItems();
    render();
}

// saves the data in local storage
function saveTableItems() {
    localStorage.setItem("tableItems", JSON.stringify(tableItems));
}

// removes a particular item when removebtn is triggered
function removeItem(event) {
    const selectedId = event.target.id;
    let filteredTableItems = tableItems.filter((item) => {
        if (item.id === Number(selectedId)) {
            return false;
        }
        else {
            return true;
        }
    });
    tableItems = filteredTableItems;
    saveTableItems();
    render();
}

// clears the whole list
function clearAllItems() {
    tableBody.innerHTML = " ";
    localStorage.clear();
    tableItems = [];
    render();
}

// View
function render() {
    tableBody.innerHTML = " ";
    if (tableItems.length === 0) {
        const tableRow = document.createElement("tr");
        const tableHead = document.createElement("th");
        tableHead.textContent = "--"
        
        const tableDataMoneySpent = document.createElement("td");
        tableDataMoneySpent.textContent = "No items are logged yet."
        const tableDataDate = document.createElement("td");
        const tableDataAmount = document.createElement("td");
        const tableDataButton = document.createElement("td");
        tableRow.append(tableHead, tableDataMoneySpent, tableDataDate, tableDataAmount, tableDataButton);
        tableBody.appendChild(tableRow);
    } else {
        tableItems.forEach((item) => {
            // creating elements tr, th, td and button and appending the elements
            const tableRow = document.createElement("tr");
            tableRow.id = item.id;
            const tableHead = document.createElement("th");
            tableHead.setAttribute("scope","row"); // setting attributes
            tableHead.textContent = "->";

            const tableDataMoneySpent = document.createElement("td");
            const tableDataDate = document.createElement("td");
            const tableDataAmount = document.createElement("td");
            const tableDataButton = document.createElement("td");
            const removeButton = document.createElement("button");

            removeButton.setAttribute("class", "remove-btn"); // setting attributes
            removeButton.innerText = "Remove";
            removeButton.id = item.id;
            removeButton.onclick = removeItem;
            tableDataButton.appendChild(removeButton);

            tableDataMoneySpent.textContent = item.Title;
            tableDataDate.textContent = item.Date;
            tableDataAmount.textContent = "$ " + item.Amount;

            tableRow.append(tableHead, tableDataMoneySpent, tableDataDate, tableDataAmount, tableDataButton);
            tableBody.appendChild(tableRow); // appending all the child elements to the tbody element
        });
    }
}

function changeTheme() {
    if (checked.checked) {
        bodyEl.style.backgroundColor = "#ECFDF5";
        spanEl.style.color = "#2B283A";
        span2El.style.color = "#10B981";
        trackMoneyEl.style.color = "#10B981";
        moneySpentText.style.color = "black";
        amountText.style.color = "black";
        dateText.style.color = "black";
    }
    else {
        bodyEl.style.backgroundColor = "#1C1C1C";
        spanEl.style.color = "white";
        span2El.style.color = "#4ADF86";
        trackMoneyEl.style.color = "#4ADF86";
        moneySpentText.style.color = "white";
        amountText.style.color = "white";
        dateText.style.color = "white";
    }
}

setInterval(changeTheme, 100);

// Controller
addButton.addEventListener("click", addTableItems);
clearAllButton.addEventListener("click", clearAllItems);


