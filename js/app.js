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
// BÜYÜK MANŞET SLIDER
// ======================


let manseIndex = 0;


const buyukBaslik = document.querySelector("#buyuk-baslik");
const buyukAciklama = document.querySelector("#buyuk-aciklama");
const buyukResim = document.querySelector(".featured img");
const buyukLink = document.querySelector("#buyuk-link");



function mansetGoster(){


let haber = haberler[manseIndex];


buyukBaslik.innerHTML = haber.baslik;


buyukAciklama.innerHTML = haber.aciklama;


buyukResim.src = haber.resim;


buyukLink.href = haber.link;


}





document.querySelector("#sonrakiHaber").onclick = function(){


manseIndex++;


if(manseIndex >= haberler.length){

manseIndex = 0;

}


mansetGoster();


};





document.querySelector("#oncekiHaber").onclick = function(){


manseIndex--;


if(manseIndex < 0){

manseIndex = haberler.length - 1;

}


mansetGoster();


};





mansetGoster();
}
// ======================
// POPÜLER HABERLER
// ======================


const popularArea = document.querySelector("#popular-area");


if(popularArea && typeof haberler !== "undefined"){


popularArea.innerHTML = "";


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
