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
// POPÜLER HABERLER
// ======================


const popularArea = document.querySelector("#popular-area");


if(popularArea && typeof haberler !== "undefined"){


popularArea.innerHTML="";


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
