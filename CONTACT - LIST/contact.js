let nameInput = document.getElementById("name");
let emailInput = document.getElementById("mail");
let phoneInput = document.getElementById("phn");
let addContactButton = document.getElementById("contact");
let div = document.getElementById("container");
let table = document.getElementById("tableData");

function addData(event)
{
  event.preventDefault();
  let newNameText = nameInput.value;
  console.log(newNameText);

  let newEmailText = emailInput.value;
  console.log(newEmailText);

  let newPhoneText = phoneInput.value;
  console.log(newPhoneText);

  let para = document.createElement("p");
  let name = document.createTextNode(newNameText + " - ");
  let mail = document.createTextNode(newEmailText + " - ");
  let phone = document.createTextNode(newPhoneText);

  para.appendChild(name);
  para.appendChild(mail);
  para.appendChild(phone);
  div.appendChild(para);

  let row = document.createElement("tr")
  let data = document.createElement("td");
  let data1 = document.createElement("td");
  let data2 = document.createElement("td");
  
  let name1 = document.createTextNode(newNameText);
  let mail1 = document.createTextNode(newEmailText);
  let phone1 = document.createTextNode(newPhoneText);
  data.appendChild(name1);
  data1.appendChild(mail1);
  data2.appendChild(phone1);
  row.appendChild(data);
  row.appendChild(data1);
  row.appendChild(data2);
  table.appendChild(row);
  nameInput.value = "";
  emailInput.value ="";
  phoneInput.value="";

}

addContactButton.addEventListener('click', addData);