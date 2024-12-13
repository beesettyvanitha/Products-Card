
// save all 3 elements
let taskInput = document.getElementById("task");
let addTaskButton = document.getElementById("add-task");
let todoList = document.getElementById("listItem");

// function that handles adding todo-task to the list
function addTodoTask(event)
{
   event.preventDefault();
   let newTaskText = taskInput.value;
   console.log(newTaskText);
   
   let list = document.createElement("li");

   let checkbox = document.createElement("input");
   checkbox.type = "checkbox"; 

   let text = document.createTextNode(newTaskText);
   list.style.padding = "5px";
   list.style.fontSize = "medium"
   list.style.fontFamily = "verdana";
   list.style.display = "flex";

   list.appendChild(checkbox);
   list.appendChild(text);
   todoList.appendChild(list);
   taskInput.value = "";

   checkbox.addEventListener('change',function(){ checkBox(list,checkbox)});
}

function checkBox(list,checkbox) 
{
   if(checkbox.checked)
   {
      list.style.textDecoration = "line-through";
   }
   else
   {
      list.style.textDecoration = "none";
   }
}

// add event listener to addTaskButton
addTaskButton.addEventListener('click', addTodoTask);

