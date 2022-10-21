"use strict";
console.log("uzd.js");

const formEl = document.getElementById("actionForm");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("psw");
const passwordRepeatEl = document.getElementById("psw-repeat");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Submit ivyko, valdymas perimtas");
  clearErrors();

  const inputValues = {};

  inputValues.emailEl = emailEl.value.trim();
  inputValues.passwordEl = passwordEl.value.trim();
  inputValues.passwordRepeatEl = passwordRepeatEl.value.trim();

  console.log("inputValues ===", inputValues);
  console.log("email ===", formEl.elements.email.value);
  console.log("email ===", formEl.elements.psw.value);
  //console.log("email ===", formEl.elements.psw - repeat.value);

  //elementai formoje:
  //formEl.elements.email.value;

  if (
    checkIfEmpty(emailEl) &&
    checkIfEmpty(passwordEl) &&
    checkIfEmpty(passwordRepeatEl) &&
    checkPasswords(passwordEl, passwordRepeatEl)
  ) {
    console.log("Viskas uzpildyta");
    formEl.style.display = "none";
    const h2El = document.createElement("h2");
    h2El.textContent = emailEl.value;
    const pEl = document.createElement("p");
    pEl.textContent = passwordEl.value;
    document.body.append(h2El, pEl);
  }
});

function checkIfEmpty(el) {
  if (el.value.length === 0) {
    const prevEl = el.previousElementSibling.innerHTML;
    el.nextElementSibling.style.display = "block";
    el.nextElementSibling.textContent = `${prevEl} neuzpildytas`;
    return false;
  } else if (el.value.length <= 3) {
    const prevEl = el.previousElementSibling.innerHTML;
    el.nextElementSibling.style.display = "block";
    el.nextElementSibling.textContent = `Iveskite 4 ar daugiau simboliu`;
    return false;
  } else return true;
}

function checkPasswords(psw, pswRepeat) {
  if (psw.value != pswRepeat.value) {
    psw.nextElementSibling.style.display = "block";
    psw.nextElementSibling.textContent = `${psw.previousElementSibling.innerHTML} ir ${pswRepeat.previousElementSibling.innerHTML} nesutampa`;
    return false;
  } else return true;
}

function clearErrors() {
  const errorsArray = document.querySelectorAll(".errorMsg");
  console.log("errorsArray ===", errorsArray);
  for (let error of errorsArray) {
    error.style.display = "none";
  }
}
