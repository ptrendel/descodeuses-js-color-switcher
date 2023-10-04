const color = ["red", "blue", "green"];

function setBgColor() {
  const randomNumber = getRandomNumber(color.length);
  document.getElementById("bg").style.backgroundColor = color[randomNumber];
  document.getElementById("bgcolor").innerHTML = color[randomNumber];
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

document.getElementById("bgbutton").addEventListener("click", setBgColor);
