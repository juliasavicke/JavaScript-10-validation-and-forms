"use strict";
console.log("createElementHelper.js");

const appEl = document.getElementById("app");

{
  /* <h2 class="subTitle">Hello Friday!</h2>
<p class="text">I am text</p> */
}

function createEl(tagName, destination, className, text) {
  const el = document.createElement(tagName);
  if (className) el.className = className;
  if (text || text === "0") el.textContent = text;
  destination.append(el);
  return el;
}

const elObj = {
  tagName: "h2",
  destination: appEl,
  className: "subTitle",
  text: "hello friday",
};

//createEl("h2", appEl, "subTitle", "Hello friday!");
createEl(elObj.tagName, elObj.destination, elObj.className, elObj.text);

const seasons = ["summer", "autumn", "winter", "spring"];

function makeList(arrToMakeListFrom, destination) {
  let ulEl = createEl("ul", destination, "card");
  for (let item of arrToMakeListFrom) {
    createEl("li", ulEl, "", item);
  }
  console.log("ulEl ===", ulEl);
}
makeList(seasons, appEl);
