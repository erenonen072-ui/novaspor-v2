document.addEventListener("DOMContentLoaded",()=>{


const box=document.getElementById("cookieBox");

const btn=document.getElementById("cookieAccept");


if(localStorage.getItem("cookieAccepted")){

box.style.display="none";

}



btn.addEventListener("click",()=>{


localStorage.setItem(
"cookieAccepted",
"true"
);


box.style.display="none";


});


});
