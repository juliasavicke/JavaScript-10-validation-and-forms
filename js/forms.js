"use strict";
console.log("forms.js");

const formEl = document.getElementById("loginForm");
const usernameInputEl = document.getElementById("username");
const emailInputEl = document.getElementById("email");
const legalCheckboxEl = document.getElementById("legal");
const timeRadioEl = document.getElementById("timeRadio");

//console.log("formEl ===", formEl);

formEl.addEventListener("submit", (event) => {
  //sustabdo veiksma  - issiuntima i kita psl
  event.preventDefault();
  console.log("submit ivyko");
  clearErrors();
  //sutinkti input reiksmes
  const formValues = {};
  formValues.usernameValue = usernameInputEl.value.trim();
  formValues.emailValue = emailInputEl.value;
  formValues.legalCheckboxEl = legalCheckboxEl.checked;
  const bestTimeRadioEl = timeRadioEl.querySelector("input:checked");

  formValues.bestTimeValue = bestTimeRadioEl?.value
    ? bestTimeRadioEl.value
    : "nepasirinkta";

  console.log("formValues.timeRadioEl ===", formValues.timeRadioEl);

  //console.log(legalCheckboxEl.checked);

  //checkIfEmpty(usernameValue);

  if (formValues.legalCheckboxEl === false) {
    legalCheckboxEl.nextElementSibling.style.display = "block";
    return;
  }
  if (formValues.usernameValue.length === 0) {
    usernameInputEl.nextElementSibling.style.display = "block";
    return;
  } else if (formValues.usernameValue.length <= 3) {
    usernameInputEl.nextElementSibling.style.display = "block";
    return;
  }
  if (formValues.emailValue.length === 0) {
    emailInputEl.nextElementSibling.style.display = "block";
    return;
  } else if (!formValues.emailValue.includes("@")) {
    emailInputEl.nextElementSibling.style.display = "block";
    return;
  }
  console.log("Sending ", formValues);
  //fetch();
});

//su sia funkcija isvalau visas formos klaidas
function clearErrors() {
  const errorsArray = document.querySelectorAll(".errorFeedback");
  console.log("errorsArray ===", errorsArray);
  for (let error of errorsArray) {
    error.style.display = "none";
  }
}

function checkIfEmpty(usernameValue) {}
