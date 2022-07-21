
// initiation
let boldBtn= document.querySelector("#bold");
let italicBtn=document.querySelector("#italic")
let underlineBtn=document.querySelector("#underline")

let leftBtn=document.querySelector("#align_left")
let centerBtn=document.querySelector("#align_center")
let rightBtn=document.querySelector("#align_right")



let colorBtn=document.querySelector("#color")


let sizeSelect =  document.querySelector("#size");
let fontSelect =  document.querySelector("#font");


let text= document.querySelector("#text");






// functions
function font(){
    let s=fontSelect.value;
    text.style.fontFamily =s;  
}

function size(){
    let s=sizeSelect.value;
    text.style.fontSize =s;
}


function underline(){
    if(text.style.textDecoration=="underline")
    text.style.textDecoration="none";
    else
    text.style.textDecoration="underline";
}

function italic(){
    if ( text.style.fontStyle=="italic")
    text.style.fontStyle="normal"
    else
    text.style.fontStyle="italic";
}
function bold(){
  if ((text.style.fontWeight)=="" )
    text.style.fontWeight ="bold";
    else
    text.style.fontWeight ="";

}

function color(){
    text.style.color =colorBtn.value;

}
function left(){
    text.style.textAlign="left"
}

function center(){
    text.style.textAlign="center"
}

function right(){
    text.style.textAlign="right"
}




//listeners
underlineBtn.onclick=underline;
italicBtn.onclick=italic;
boldBtn.onclick = bold;
sizeSelect.onclick=size;
fontSelect.onclick=font;
colorBtn.onchange=color;
leftBtn.onclick=left;
centerBtn.onclick=center;
rightBtn.onclick=right;

