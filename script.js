function setBgColor() {
  let randomColor = getRGBColor();
  document.getElementById("bg").style.backgroundColor = randomColor;
  document.getElementById("bgcolor").innerHTML = randomColor;
}

function getRGBColor() {
  const r = getRandomNumber(255);
  const g = getRandomNumber(255);
  const b = getRandomNumber(255);
  const rgbValue = `rgb(${r},${g},${b})`;
  return rgbValue;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

document.getElementById("bgbutton").addEventListener("click", setBgColor);
