"use strict";
console.log("uzd.js");

const formEl = document.getElementById("actionForm");
const emailEl = formEl.elements.email;
const passwordEl = formEl.elements.psw;
const passwordRepeatEl = formEl.elements.pswRepeat;

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();
  if (
    checkIfEmpty(emailEl) &&
    isThereALetter(emailEl.value, "@") &&
    checkIfEmpty(passwordEl) &&
    checkIfEmpty(passwordRepeatEl) &&
    checkPasswords(passwordEl, passwordRepeatEl)
  ) {
    console.log("Viskas uzpildyta");
    formEl.style.display = "none";
    createEl("h2", emailEl.value);
    createEl("pre", passwordEl.value);
  }
});

function isThereALetter(valueToCheck, needle) {
  console.log("valueToCheck ===", valueToCheck);
  console.log("needle ===", needle);
  console.log(
    "valueToCheck.includes(needle) ===",
    valueToCheck.includes(needle)
  );
  return valueToCheck.includes(needle);
}

function createEl(tagName, content) {
  const el = document.createElement(tagName);
  el.textContent = content;
  document.body.append(el);
}

function checkIfEmpty(el) {
  if (el.value.trim().length === 0) {
    const prevEl = el.previousElementSibling.innerHTML;
    el.nextElementSibling.style.display = "block";
    el.nextElementSibling.textContent = `${prevEl} neuzpildytas`;
    return false;
  } else if (el.value.trim().length <= 3) {
    const prevEl = el.previousElementSibling.innerHTML;
    el.nextElementSibling.style.display = "block";
    el.nextElementSibling.textContent = `Iveskite 4 ar daugiau simboliu`;
    return false;
  } else return true;
}

function checkPasswords(psw, pswRepeat) {
  if (psw.value !== pswRepeat.value) {
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
