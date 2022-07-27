
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
    if(text.style.textDecoration=="underline"){
    text.style.textDecoration="none";
    underlineBtn.classList="notclicked";}

    else{
    text.style.textDecoration="underline";
    underlineBtn.classList="clicked";}
    }


function italic(){
    if ( text.style.fontStyle=="italic")
    {text.style.fontStyle="normal"
    italicBtn.classList="notclicked";}
    else{
    text.style.fontStyle="italic";
    italicBtn.classList="clicked";}
    }


function bold(){
  if ((text.style.fontWeight)=="" ){
    text.style.fontWeight ="bold";
    boldBtn.classList="clicked";
    }
    else{
    text.style.fontWeight ="";
    boldBtn.classList="notclicked";

    }
}

function color(){
    text.style.color =colorBtn.value;

}
function left(){
    text.style.textAlign="left"
    leftBtn.classList="clicked"
    centerBtn.classList="notclicked"
    rightBtn.classList="notclicked"
   
}

function center(){
  
    if(text.style.textAlign=="center"){
        centerBtn.classList="notclicked"
        rightBtn.classList="notclicked"
        leftBtn.classList="clicked"
        text.style.textAlign="left"

    }
    else {
        text.style.textAlign="center"
        centerBtn.classList="clicked"
        rightBtn.classList="notclicked"
        leftBtn.classList="notclicked"
    }
}

function right(){
  
    if(text.style.textAlign=="right"){
        centerBtn.classList="notclicked"
        rightBtn.classList="notclicked"
        leftBtn.classList="clicked"
        text.style.textAlign="left"

    }
    else{
        text.style.textAlign="right"
        centerBtn.classList="notclicked"
        rightBtn.classList="clicked"
        leftBtn.classList="notclicked"
    }
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

