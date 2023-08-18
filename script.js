"use strict";

let generateRandomColor = function () {
  return Math.round(Math.random() * 255);
};

let colorButton = document.getElementsByClassName("btn-change")[0];

colorButton.addEventListener("click", function () {
  console.log(generateRandomColor());
});
