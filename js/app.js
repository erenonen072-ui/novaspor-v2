// ======================
// NOVASPOR HABERLERİ YÜKLE
// ======================


const haberAlani = document.querySelector(".news-grid");


if(haberAlani){


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


<a href="${haber.link}">
Devamını Oku →
</a>


</div>


`;


});


}
// ======================
// BÜYÜK MANŞETLER
// ======================

const heroArea = document.querySelector("#hero-area");


if(heroArea && typeof haberler !== "undefined"){


haberler.slice(0,10).forEach(haber=>{


heroArea.innerHTML += `

<div class="hero-card">


<img src="${haber.resim}">


<div class="hero-content">


<span>
${haber.kategori}
</span>


<h1>
${haber.baslik}
</h1>


<p>
${haber.aciklama}
</p>


<a href="${haber.link}" target="_blank">
Haberi Oku →
</a>


</div>


</div>

`;

});


}
// ======================
// BÜYÜK MANŞET HABER
// ======================


const buyukBaslik = document.querySelector("#buyuk-baslik");
const buyukAciklama = document.querySelector("#buyuk-aciklama");
const buyukResim = document.querySelector(".featured img");


if(buyukBaslik && haberler.length > 0){


let haber = haberler[0];


buyukBaslik.innerHTML = haber.baslik;


buyukAciklama.innerHTML = haber.aciklama;


buyukResim.src = haber.resim;


}
