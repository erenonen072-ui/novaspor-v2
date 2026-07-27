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


const buyukBaslik = document.querySelector("#buyuk-baslik");

const buyukAciklama = document.querySelector("#buyuk-aciklama");

const buyukResim = document.querySelector(".featured img");



if(buyukBaslik && typeof haberler !== "undefined"){


let haber = haberler[0];


buyukBaslik.innerHTML = haber.baslik;


buyukAciklama.innerHTML = haber.aciklama;


if(buyukResim){

buyukResim.src = haber.resim;

}


}
// ======================
// MANŞET SLIDER
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


if(resim){

resim.src = haber.resim;

}



manseIndex++;



if(manseIndex >= haberler.length || manseIndex >= 10){

manseIndex = 0;

}


}



mansetDegistir();


setInterval(mansetDegistir,5000);
