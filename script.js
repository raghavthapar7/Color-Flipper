"use strict";

let generateRandomColor = function () {
  return Math.round(Math.random() * 255);
};

// let colorButton = document.getElementsByClassName("btn-change")[0];
let header = document.getElementsByClassName("header")[0];
let color = document.getElementsByClassName("color")[0];
// let colorBox = document.getElementById("box");

header.addEventListener("click", function () {
  let r = generateRandomColor();
  let g = generateRandomColor();
  let b = generateRandomColor();

  header.style.backgroundColor = `RGB(${r},${g},${b})`;
  color.textContent = `RGB(${r},${g},${b})`;
  console.log(r, g, b);
});
