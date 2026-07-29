const sonHaberler = [

{
baslik:"Galatasaray'dan Dev Transfer Hamlesi!",
kategori:"Süper Lig",
resim:"images/haber1.jpg.png",
zaman:"5 dakika önce"
},

{
baslik:"Fenerbahçe'de Yeni Gelişme!",
kategori:"Transfer",
resim:"images/haber2.jpg.png",
zaman:"20 dakika önce"
},

{
baslik:"Beşiktaş Hazırlıklarına Devam Ediyor",
kategori:"Süper Lig",
resim:"images/haber3.jpg.png",
zaman:"1 saat önce"
},

{
baslik:"Cedi Osman Yeni Sezon Öncesi Form Tutuyor!",
kategori:"Basketbol",
resim:"images/🏀 Cedi Osman Yeni Sezon Öncesi Form Tutuyor! Hedef EuroLeague'de Zirve.png",
zaman:"2 saat önce"
}

];



document.addEventListener("DOMContentLoaded",()=>{


const alan=document.getElementById("latest-news");


if(!alan) return;



alan.innerHTML = sonHaberler.map(haber=>`


<article class="news-card">


<img src="${haber.resim}" loading="lazy">


<div class="news-info">


<span class="news-tag">

${haber.kategori}

</span>


<h3>

${haber.baslik}

</h3>


<div class="news-bottom">

<span>

🕒 ${haber.zaman}

</span>


<a href="#">

Oku →

</a>


</div>


</div>


</article>


`).join("");


});
