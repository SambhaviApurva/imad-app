console.log('Loaded!');
// change the text
var element=document.getElementById("main-text");
element.innerHTML = "hello idiot";

// making image move
 
var img=document.getElementById("dino");
img.onclick = function() {
    img.style.marginLeft = "100px";
};