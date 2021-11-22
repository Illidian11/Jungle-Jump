var character = document.getElementById("character");
var block = document.getElementById("block");
var x = document.getElementById("lev");
function jump() {
  if(character.classList != "animation"){
  character.classList.add("animation");
  }
  setTimeout(function(){
    character.classList.remove("animation");
  },500);
}

var checkDead = setInterval(function(){
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(blockLeft<20 && blockLeft>0 && characterTop>=130){
    block.style.animation = "none";
    block.style.display = "none";
    character.style.animation = "none";
    character.style.display = "none";
    document.getElementById("sign").style.display = "block";
    document.getElementById("sign-3").style.display = "block";
    document.getElementById("game").style.animation = "none";
    document.getElementById("sign-4").style.display = "none"
    document.getElementById("achieve").style.display = "none"
    document.getElementById("sign-5").style.display = "none";
    document.getElementById("achieve-2").style.display = "none"
    x.style.display = "none";
  }
}, 10);

function refresh() {
  location.reload("index.html");
}


window.onload= function() {
  setTimeout(function() {document.getElementById("sign-2").style.display = "block";}, 180000);
  setTimeout(function() {block.style.animation = "none";}, 180000);
  setTimeout(function() {character.style.animation = "none";}, 180000);
  setTimeout(function() {block.style.display = "none";}, 180000);
  setTimeout(function() {document.getElementById("sign").style.display = "none";}, 180000);
  setTimeout(function() {document.getElementById("sign-3").style.display = "none";}, 180000);
  setTimeout(function() {document.getElementById("game").style.animation = "none";}, 180000);
}

window.onload= function() {
  setTimeout(function() {document.getElementById("achieve").style.display = "block";}, 60000);
  setTimeout(function() {document.getElementById("sign-4").style.display = "block";}, 60000);
  setTimeout(function() {document.getElementById("achieve").style.display = "none";}, 64000);
  setTimeout(function() {document.getElementById("sign-4").style.display = "none";}, 64000);
  setTimeout(function() {document.getElementById("block").style.animationDuration = "1s";}, 164000);
  setTimeout(function() {document.getElementById("achieve-2").style.display = "block";}, 120000);
  setTimeout(function() {document.getElementById("sign-5").style.display = "block";}, 120000);
  setTimeout(function() {document.getElementById("sign-5").style.display = "none";}, 124000);
  setTimeout(function() {document.getElementById("achieve-2").style.display = "none";}, 124000);
  setTimeout(function() {document.getElementById("block").style.animationDuration = "1050ms";}, 124000);
  setTimeout(function() { document.getElementById("game").style.backgroundImage = "url(Lava.jpeg)"; }, 120000);
  setTimeout(function() {document.getElementById("game").style.backgroundImage = "url(CD6CF918-94FE-432C-BB66-F6CFA2CD9CF3.gif)";}, 60000);
  setTimeout(function() {document.getElementById("game").style.animation = "bg 5s linear infinite";}, 60000);
}
