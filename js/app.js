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
