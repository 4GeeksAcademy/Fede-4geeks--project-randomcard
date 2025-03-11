import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";




function randomSelectionArray(value) {
    let randomIndex = Math.floor(Math.random() * value.length)
    return value[randomIndex]
  }
  
function generateCard() {
  let figures = randomSelectionArray(["♥", "♦", "♣", "♠"])
  let numbers = randomSelectionArray(["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"])
  console.log({figures, numbers});
  let simbolUpRender = document.getElementById("simbolUp");
    simbolUpRender.innerHTML = `${figures}`
  let simbolDownRender = document.getElementById("simbolDown");
  simbolDownRender.innerHTML = `${figures}`
  let numberRender = document.getElementById("numberCard");
  numberRender.innerHTML = `${numbers}`
  if (figures === "♥" || figures === "♦") {
    simbolUpRender.style.color = "red";
    simbolDownRender.style.color = "red";
    numberRender.style.color = "red";
  } else {
    simbolUpRender.style.color = "black";
    simbolDownRender.style.color = "black";
    numberRender.style.color = "black";
  }
}

function changeSize() {
  let width = document.getElementById("width").value + "px";
  let height = document.getElementById("height").value + "px";
  let cardElement = document.getElementById("card");
  cardElement.style.width = width;
  cardElement.style.height = height;
}


window.onload = function() {
  //write your code here
  document.getElementById("sizeButton").addEventListener('click', changeSize);
  document.getElementById("cardButton").addEventListener('click', generateCard);
  setInterval(generateCard, 10000);
};
