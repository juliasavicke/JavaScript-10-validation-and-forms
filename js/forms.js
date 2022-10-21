"use strict";
console.log("forms.js");

const formEl = document.getElementById("loginForm");
const usernameInputEl = document.getElementById("username");
const emailInputEl = document.getElementById("email");

console.log("formEl ===", formEl);

formEl.addEventListener("submit", (event) => {
  //sustabdo veiksma  - issiuntima i kita psl
  event.preventDefault();
  console.log("submit ivyko");
  //sutinkti input reiksmes
  const formValues = {};
  formValues.usernameValue = usernameInputEl.value;
  formValues.emailValue = emailInputEl.value;
  console.log("formValues ===", formValues);
  if (formValues.usernameValue.length === 0) {
    usernameInputEl.nextElementSibling.style.display = "block";
  }
  if (formValues.emailValue.length === 0) {
    emailInputEl.nextElementSibling.style.display = "block";
  }
});
