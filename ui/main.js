console.log('Loaded!');
// change the text
var element=document.getElementById("main-text");
element.innerHTML = "hello idiot";

// making image move
 
var img=document.getElementById("dino");
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function() {
    var interval = setInterval(moveRight,50);
};