document.addEventListener("DOMContentLoaded",()=>{


const resimler=document.querySelectorAll("img");


resimler.forEach(img=>{

img.setAttribute(
"loading",
"lazy"
);

});


});
