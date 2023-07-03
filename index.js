const mailbtn=document.getElementById("mailBtn")
const root = document.querySelector(':root');
const sign =document.getElementById("sign");
const text = document.getElementById("text");
const onoffButton=document.getElementById("switchcolors");
const photo = document.getElementById("personalPhoto");
root.style.setProperty('--progresscolor',"#f6a901");
root.style.setProperty('--bgcolor',"rgba(211,183,122,1)");

let OpenMail=0;
let onOff=1;
function mail(){
    if(OpenMail===0){
    mailbtn.style.borderRadius= '40px';
    mailbtn.style.transitionDuration= "0.7s";
    mailbtn.style.width = "240px";
    sign.style.width= "25%";
    text.style.width= "90%";
    text.style.paddingLeft= " 9%";
    text.style.opacity= "1";
    text.style.display="block";
    text.style.animation= " fadeIn 1.5s";
        OpenMail=1;
    }
    else{
        text.style.display="none";
        text.style.opacity="0";
        mailbtn.style.width = "33px";
        mailbtn.style.borderRadius= '50%';
        mailbtn.style.transitionDuration= "0.5s";
        sign.style.width= "100%";
        sign.style.transitionDuration="0.3s"
        OpenMail=0;
    }
}
function lights(){
    if(onOff===1){
        localStorage.setItem("orange", "2");
        root.style.setProperty('--progresscolor','hsl(198,90%,55%)');
        root.style.setProperty('--bgcolor',"rgba(37,182,244,0.85)");
        root.style.setProperty('--btn',"#f6a901");
        onOff=0;
        photo.src="images/IMG_7209.JPG";

    }
    else{
        onOff=1;
        root.style.setProperty('--progresscolor',"#f6a901");
        root.style.setProperty('--btn',"hsl(198,90%,55%)");
        root.style.setProperty('--bgcolor',"rgba(211,183,122,1)");
        photo.src="images/IMG_7223.JPG";
        localStorage.setItem("orange", "1");
    }
}
mailbtn.addEventListener("click",mail)
onoffButton.addEventListener("click",lights)

let checkStorageLights=  localStorage.getItem("orange")
if(checkStorageLights == 2){
    lights();
}

const firstInd = document.getElementById("bullet1");
const secondInd = document.getElementById("bullet2");
const thirdInd = document.getElementById("bullet3");

firstInd.addEventListener("click", function firstSection(){
    localStorage.setItem("section","1");
    secondInd.classList.remove("active");
    thirdInd.classList.remove("active");
    firstInd.classList.add("active");
})
secondInd.addEventListener("click",function secondSection(){
    localStorage.setItem("section","2");
    firstInd.classList.remove("active");
    thirdInd.classList.remove("active");
    secondInd.classList.add("active");
})
thirdInd.addEventListener("click",function thirdSection(){
    localStorage.setItem("section","3");
    secondInd.classList.remove("active");
    firstInd.classList.remove("active");
    thirdInd.classList.add("active");
})

let checkSection=localStorage.getItem("section");
if(checkSection == 1){
    secondInd.classList.remove("active");
    thirdInd.classList.remove("active");
    firstInd.classList.add("active");

}
else if(checkSection == 2){
    firstInd.classList.remove("active");
    thirdInd.classList.remove("active");
    secondInd.classList.add("active");
}
else if(checkSection == 3){
    secondInd.classList.remove("active");
    firstInd.classList.remove("active");
    thirdInd.classList.add("active");
}


