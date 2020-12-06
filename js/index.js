window.onload = function () {
  document.getElementById("red").onclick = Red;
  document.getElementById("blue").onclick = Blue;
  document.getElementById("green").onclick = Green;
};
function Red() {
  var red = document.getElementById("outer-block");
  red.style.backgroundColor = "brown";
}
function Blue() {
  var blue = document.getElementById("outer-block");
  blue.style.backgroundColor = "blue";
}
function Green() {
  var grey = document.getElementById("outer-block");
  grey.style.backgroundColor = "green";
}
