// ======================
// NOVASPOR HABERLERİ YÜKLE
// ======================


const haberAlani = document.querySelector(".news-grid");


if(haberAlani && typeof haberler !== "undefined"){


haberAlani.innerHTML="";


haberler.forEach(haber=>{


haberAlani.innerHTML += `


<div class="news-card">


<img src="${haber.resim}">


<h3>
${haber.baslik}
</h3>


<p>
${haber.aciklama}
</p>


<a href="${haber.link}" target="_blank">
Devamını Oku →
</a>


</div>


`;


});


}






// ======================
// BÜYÜK MANŞET
// ======================


// ======================
// MANŞET SLIDER
// ======================

let manseIndex = 0;


const buyukBaslik = document.querySelector("#buyuk-baslik");
const buyukAciklama = document.querySelector("#buyuk-aciklama");
const buyukResim = document.querySelector(".featured img");
const buyukLink = document.querySelector("#buyuk-link");



function mansetGoster(){


if(!haberler) return;


let haber = haberler[manseIndex];


buyukBaslik.innerHTML = haber.baslik;

buyukAciklama.innerHTML = haber.aciklama;


if(buyukResim){

buyukResim.src = haber.resim;

}


if(buyukLink){

buyukLink.href = haber.link;

}


}




document.querySelector("#sonrakiHaber")?.addEventListener("click",()=>{


manseIndex++;


if(manseIndex >= haberler.length){

manseIndex = 0;

}


mansetGoster();


});




document.querySelector("#oncekiHaber")?.addEventListener("click",()=>{


manseIndex--;


if(manseIndex < 0){

manseIndex = haberler.length - 1;

}


mansetGoster();


});



mansetGoster();

}
// ======================
// MANŞET SLIDER OKLAR
// ======================


let manseIndex = 0;


function mansetDegistir(){


const baslik = document.querySelector("#buyuk-baslik");
const aciklama = document.querySelector("#buyuk-aciklama");
const resim = document.querySelector(".featured img");


if(!baslik || typeof haberler === "undefined") return;


let haber = haberler[manseIndex];


baslik.innerHTML = haber.baslik;

aciklama.innerHTML = haber.aciklama;

resim.src = haber.resim;


}



document.querySelector("#sonrakiHaber")?.addEventListener("click",()=>{


manseIndex++;


if(manseIndex >= haberler.length || manseIndex >=10){

manseIndex=0;

}


mansetDegistir();


});




document.querySelector("#oncekiHaber")?.addEventListener("click",()=>{


manseIndex--;


if(manseIndex <0){

manseIndex=haberler.length-1;

}


mansetDegistir();


});



mansetDegistir();


setInterval(()=>{


manseIndex++;


if(manseIndex >= haberler.length || manseIndex >=10){

manseIndex=0;

}


mansetDegistir();


},5000);


mansetDegistir();


setInterval(mansetDegistir,5000);
// ======================
// POPÜLER HABERLER
// ======================


const popularArea = document.querySelector("#popular-area");


if(popularArea && typeof haberler !== "undefined"){


haberler.slice(0,3).forEach(haber=>{


popularArea.innerHTML += `


<div class="popular-card">


<img src="${haber.resim}">


<div>


<h3>
${haber.baslik}
</h3>


<p>
👁 Popüler Haber
</p>


</div>


</div>


`;


});


}
