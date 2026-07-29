const darkBtn = document.querySelector(".icon-btn:nth-child(2)");

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

localStorage.setItem(
"tema",
document.body.classList.contains("dark")
);

});


if(localStorage.getItem("tema")=="true"){
document.body.classList.add("dark");
}
