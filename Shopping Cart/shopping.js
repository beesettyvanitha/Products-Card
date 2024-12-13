let nameInput = document.getElementById("name");
let addItembutton = document.getElementById("add-item");
let itemList = document.getElementById("item-list");

function addItem(event) 
{
  event.preventDefault();
  let newItemText = nameInput.value;

  let list = document.createElement("li");
  let text = document.createTextNode(newItemText);
  list.style.marginLeft = "560px"
  list.style.fontSize = "larger"
  list.style.color = "white";

  const btn1 = document.createElement("button");
  btn1.textContent = "Bought";
  btn1.style.marginLeft = "70px"
  btn1.style.width = "68px";
  btn1.style.color= "white";
  btn1.style.backgroundColor = "green";
  btn1.style.fontSize = "small"

  const btn2 = document.createElement("button");
  btn2.textContent = "Delete";
  btn2.style.width = "68px";
  btn2.style.color= "white";
  btn2.style.backgroundColor = "red";
  btn2.style.fontSize = "small";


  list.appendChild(text);
  list.appendChild(btn1);
  list.appendChild(btn2);
  itemList.appendChild(list);

  btn1.addEventListener('click', function() {
    bought(list);
  });

  btn2.addEventListener('click', function() {
    deleteItem(list);
  });

  nameInput.value = '';
}

function bought(list) {
  list.style.textDecoration = "line-through";
}

function deleteItem(list) {
  itemList.removeChild(list);
}

addItembutton.addEventListener('click', addItem);
