window.onload = function () {
  document.getElementById("rebc").onclick = Rebecca;
  document.getElementById("yellow").onclick = yellow;
  document.getElementById("red").onclick = Red;
  document.getElementById("green").onclick = Green;
};
function Green(){
	var green = document.getElementById("outer-block");
  green.style.backgroundColor = "green";
  green.style.border = '5px solid #f0f2f5';
  green.style.borderRadius ='.9rem';
}
function Red() {
  var red = document.getElementById("outer-block");
  red.style.backgroundColor = "red";
}
function yellow() {
  var yellow = document.getElementById("outer-block");
  yellow.style.backgroundColor = "yellow";
}
function Rebecca() {
  var rebecca = document.getElementById("outer-block");
  rebecca.style.backgroundColor = "#3366ff";
}

