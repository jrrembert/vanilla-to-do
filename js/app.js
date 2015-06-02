//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completeTasksHolder = document.getElementById("complete-tasks");

var createNewTaskElement = function(taskString) {

    //Create list item
    var listItem = document.createElement("li");

    //Elements for each task
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var editInput = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    //Elements to modify
    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    label.innerText = taskString;

    //Elements to append
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem
}

//Add a new task

var createTask = function() {

    console.log("Add task...");

    //Create new list item with text from #new-task
    var listItem = createNewTaskElement(taskInput.value);

    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, completeTask);

    taskInput.value = ""
}

//Edit an existing task

var editTask = function() {
    console.log("Edit task...");

    var listItem = this.parentNode;

    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");

    //if class of parent is .editMode
    var containsClass = listItem.classList.contains("editMode");
    if (containsClass) {
        //Switch from .editMode
        //label text become the input's value
        label.innerText = editInput.value;

    } else {
        //Switch to .editMode
        //input value becomes the label's text
        editInput.value = label.innerText
    }

    //Toggle .editMode
    listItem.classList.toggle("editMode");
}

//Delete a task
var deleteTask = function() {

    console.log("Delete task...");
    //When delete button is pressed
    //Remove the parent list item from the ul
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);
}

//Mark a task complete

var completeTask = function() {
    console.log("Task complete...");
    //When checkbox is checked, append list item to #complete-tasks
    var listItem = this.parentNode;
    completeTasksHolder.appendChild(listItem);

    bindTaskEvents(listItem, incompleteTask);
}

//Mark a task incomplete

var incompleteTask = function() {
    console.log("Task incomplete...");
    //When checkbox is checked, append list item to #incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);

    bindTaskEvents(listItem, completeTask);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    console.log("Bind list item events...")

    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");

    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;

    //Bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function() {
    console.log("AJAX request");
}

//Set click handler to the createTask function
addButton.addEventListener("click", createTask);
addButton.addEventListener("click", ajaxRequest);


for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
    bindTaskEvents(incompleteTasksHolder.children[i], completeTask);

}

for (var i = 0; i < completeTasksHolder.children.length; i++) {
    bindTaskEvents(completeTasksHolder.children[i], incompleteTask);
}
