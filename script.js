const color = ["red", "blue", "green"];

function setBgColor() {
  document.getElementById("bg").style.backgroundColor = color[0];
  document.getElementById("bgcolor").innerHTML = color[0];
  console.log(color.length);
}

function getRandomNumber() {
  console.log(Math.floor(Math.random() * color.length));
}

getRandomNumber();

document.getElementById("bgbutton").addEventListener("click", setBgColor);
