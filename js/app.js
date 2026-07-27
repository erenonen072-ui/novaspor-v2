// ======================
// NOVASPOR HABER SİSTEMİ
// ======================


const haberAlani = document.querySelector(".news-grid");


if(haberAlani && typeof haberler !== "undefined"){


haberAlani.innerHTML = "";


haberler.forEach(haber => {


haberAlani.innerHTML += `

<div class="news-card">


<img src="${haber.resim}">


<span>
${haber.kategori}
</span>


<h3>
${haber.baslik}
</h3>


<p>
${haber.aciklama}
</p>


<a href="${haber.link}" target="_blank">
Haberi Oku →
</a>


</div>

`;


});


}
