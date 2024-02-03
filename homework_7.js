//1


const inputElement = document.getElementById("listelement");
const btnAdd = document.getElementById("btn-add");
const ulElement = document.getElementById("ul-element");
const deleteBtnAll = document.getElementById("clearAll");
const FormElement = document.getElementById("form-element");

FormElement.addEventListener("submit", function (e) {
  e.preventDefault();

  let userInputValue = inputElement.value;
  if (userInputValue === " ") {
    return;
  }
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

  
  


  inputElement.value = " ";
});

deleteBtnAll.addEventListener("click", function () {
  ulElement.innerHTML = " ";
});
//2

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".navbar");
hamburger.addEventListener("click", function () { 
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("active");
  console.log(hamburger);
});