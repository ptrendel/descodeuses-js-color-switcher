const color = ["red", "blue", "green"];

function setBgColor() {
  document.getElementById("bg").style.backgroundColor = color[0];
  document.getElementById("bgcolor").innerHTML = color[0];
}

document.getElementById("bgbutton").addEventListener("click", setBgColor);
