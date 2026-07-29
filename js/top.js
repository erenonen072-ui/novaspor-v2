document.addEventListener("DOMContentLoaded",()=>{


const btn=document.getElementById("topBtn");


if(!btn) return;



window.addEventListener("scroll",()=>{


if(window.scrollY>500){

btn.classList.add("show");

}else{

btn.classList.remove("show");

}


});



btn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


});
