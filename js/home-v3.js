document.addEventListener("DOMContentLoaded",()=>{

    haberleriGoster(
        "superlig-container",
        superligHaberleri
    );


    haberleriGoster(
        "avrupa-container",
        avrupaHaberleri
    );


    haberleriGoster(
        "basketbol-container",
        basketbolHaberleri
    );


    haberleriGoster(
        "transfer-container",
        transferHaberleri
    );

});



function haberleriGoster(alan, liste){

const container=document.getElementById(alan);

if(!container) return;


container.innerHTML="";


liste.forEach(haber=>{


container.innerHTML += `

<div class="haber-card">

<img src="${haber.resim}" loading="lazy">

<div>

<span>${haber.kategori}</span>

<h3>${haber.baslik}</h3>

<p>${haber.aciklama}</p>

</div>

</div>

`;

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector(".navbar");


if(menuBtn){

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("active");

});


}
});


}
