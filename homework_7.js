const inputElement = document.getElementById("listelement");
const btnAdd = document.getElementById("btn-add");
const ulElement = document.getElementById("ul-element");
const deleteBtnAll = document.getElementById("clearAll");
const FormElement = document.getElementById("form-element");

FormElement.addEventListener("submit", function (e) {
  e.preventDefault();
  // 1. get input value
  let userInputValue = inputElement.value;
  if (userInputValue === " ") {
    return;
  }
  // 2.input value in li -> ul
  let liElement = document.createElement("li");
  liElement.textContent = userInputValue;

  let deleteBtn = document.createElement("i");
  deleteBtn.setAttribute("class", "fa-solid fa-trash-can")

  deleteBtn.addEventListener("click", function () {
    liElement.remove();
  });

  liElement.appendChild(deleteBtn);
  ulElement.appendChild(liElement);
  console.log(liElement);

  
  

  // 3.
  inputElement.value = " ";
});

deleteBtnAll.addEventListener("click", function () {
  ulElement.innerHTML = " ";
});