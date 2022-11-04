// getting all the items from the DOM
// Model
let items;
let savedTodos = JSON.parse(localStorage.getItem("myTodos"));
const inputEl = document.querySelector(".add-todo");
const addButton = document.querySelector(".add-item-btn");
const removeAllButton = document.querySelector(".remove-item-btn");
const listItems = document.querySelector("#list-todos");

// if user has previous todos then show that 
if (savedTodos) {
    items = savedTodos;
    render(items);
}
else {
    items = [];
}

// saves the todo in the localStorage
function saveTodo() {
    localStorage.setItem("myTodos",JSON.stringify(items)); 
}

// adds each item user typed in to the list
function addItems() {
    let todo = inputEl.value;
    let date = new Date().getTime();
    items.push({item: todo, id: date});

    saveTodo();
    render(items); // calls the render function
}

// removes/clears all the items in the list
function removeAllItems() {
    items = [];
    listItems.innerHTML = " ";
    localStorage.clear();
}

// deletes the item associated with the button
function deleteItem(event) {
    const selectedId = event.target.id;
    let filteredItems = items.filter(function(todo) {
        if (todo.id === Number(selectedId)) {
            return false;
        }
        else{
            return true;
        }
    });
    items = filteredItems;
    saveTodo();
    render(items);
}

// View 
// renders the whole list 
function render(array) {
    listItems.innerHTML = " ";
    if (array.length === 0) {
        listItems.textContent = "No todos added or logged."
    }
    else{
        array.forEach(function(todo){
            let listItem = document.createElement("li");
            listItem.id = todo.id;
            let todoItem = document.createElement("p");
            let doneButton = document.createElement("button");
            
            // styling the button
            doneButton.setAttribute("class", "delete-btn");
            doneButton.innerText = "Done";
            doneButton.onclick = deleteItem;
            doneButton.id = todo.id;

            todoItem.textContent = todo.item;
            listItem.appendChild(todoItem);
            listItem.appendChild(doneButton);

            listItems.appendChild(listItem);
        });
    }
}

// Controller
addButton.addEventListener("click", addItems);
removeAllButton.addEventListener("click", removeAllItems);