let color = "yellow";

function setBgColor() {
  document.getElementById("bg").style.backgroundColor = color;
  document.getElementById("bgcolor").innerHTML = color;
}

document.getElementById("bgbutton").addEventListener("click", setBgColor);
