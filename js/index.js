window.onload = function () {
  document.getElementById("red").onclick = Red;
  document.getElementById("blue").onclick = Blue;
  document.getElementById("grey").onclick = Grey;
};
function Red() {
  var red = document.getElementById("outer-block");
  red.style.backgroundColor = "brown";
}
function Blue() {
  var blue = document.getElementById("outer-block");
  blue.style.backgroundColor = "blue";
}
function Grey() {
  var grey = document.getElementById("outer-block");
  grey.style.backgroundColor = "grey";
}
