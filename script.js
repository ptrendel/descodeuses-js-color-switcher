//let color = ["#F1F5F8", "#FF6604", "#C6F5B2", "#AAC4F1"];
let color = [
  "rgb(0,0,0)",
  "rgb(255,255,255)",
  "rgb(0,128,234)",
  "rgb(64,28,32)",
];

function setBgColor() {
  const randomNumber = getRandomNumber(color.length);
  document.getElementById("bg").style.backgroundColor = color[randomNumber];
  document.getElementById("bgcolor").innerHTML = color[randomNumber];
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

document.getElementById("bgbutton").addEventListener("click", setBgColor);
