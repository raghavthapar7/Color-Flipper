"use strict";

let generateRandomColor = function () {
  return Math.round(Math.random() * 255);
};

let colorButton = document.getElementsByClassName("btn-change")[0];
// let colorBox = document.getElementById("box");

colorButton.addEventListener("click", function () {
  let r = generateRandomColor();
  let g = generateRandomColor();
  let b = generateRandomColor();

  // colorBox.style.backgroundColor = `rgb(${r},${g},${b})`;
  console.log(r, g, b);
});
