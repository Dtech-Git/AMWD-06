function img1over() {
  document.getElementById("img1").src = "./imgs/chat-c.png";
}
function img1out() {
  document.getElementById("img1").src = "./imgs/chat-c-1.png";
}

function img2over() {
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "block";
}
function img3out() {
  document.getElementById("img2").style.display = "block";
  document.getElementById("img3").style.display = "none";
}
