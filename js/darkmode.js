document.addEventListener("DOMContentLoaded",()=>{

const darkBtn = document.querySelector(".icon-btn:nth-child(2)");

if(!darkBtn) return;


darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");


localStorage.setItem(
"darkMode",
document.body.classList.contains("dark")
);


});


if(localStorage.getItem("darkMode") === "true"){

document.body.classList.add("dark");

}


});
