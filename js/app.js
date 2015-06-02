//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");


var createNewTaskElement = function(taskString) {

    //Create list item
    var listItem = document.createElement("li");



    var checkBox = document.createElement("input");
    var label = document.createElement("input");
    var editInput = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    //EAch elements, needs modifed and appended


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
    var listItem = createNewTaskElement("Some new task");

    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, completeTask);
}



//Edit an existing task


var editTask = function() {
    console.log("Edit task...");

    //if class of parent is .editMode
    //Switch from .editMode
    //label text become the input's value
    //else
    //Switch to .editMode
    //input value becomes the label's text

    //Toggle .editMode

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



//Mark a task as complete


var completeTask = function() {

    console.log("Task complete...");
    //When checkbox is checked
    //Append list item to #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);

    bindTaskEvents(listItem, incompleteTask);


}


//Mark a task as incomplete

var incompleteTask = function() {
    console.log("Task incomplete...");

    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);

    bindTaskEvents(listItem, completeTask);
}

var bindTaskEvents = function(taskListItem, checkboxEventHandler) {
    console.log("Bind list item events...")

    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
    //select it's children
    //bind editTask to edit button

    editButton.onclick = editTask;
    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;

    //bind taskCompleted to checkbox


}


//Set click handler to the addTask function

addButton.onclick = createTask;


for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
    bindTaskEvents(incompleteTasksHolder.children[i], completeTask);

}

for (var i = 0; i < completedTasksHolder.children.length; i++) {
    bindTaskEvents(completedTasksHolder.children[i], incompleteTask);
}
