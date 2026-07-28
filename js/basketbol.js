// ==========================
// NOVASPOR BASKETBOL
// ==========================

const basketHaberler = [

{
title:"Fenerbahçe Beko'dan Dev Transfer",
summary:"Sarı-lacivertliler yeni sezon öncesi kadrosunu güçlendirmeye devam ediyor.",
image:"images/basket1.jpg",
link:"#",
tag:"EUROLEAGUE"
},

{
title:"Anadolu Efes Hazırlık Maçını Kazandı",
summary:"Efes hazırlık karşılaşmasında etkili oyunuyla galibiyete ulaştı.",
image:"images/basket2.jpg",
link:"#",
tag:"BSL"
},

{
title:"NBA'de Gecenin En Güzel Hareketleri",
summary:"Amerikan Basketbol Ligi'nde geceye damga vuran anlar.",
image:"images/basket3.jpg",
link:"#",
tag:"NBA"
},

{
title:"EuroLeague'de Haftanın MVP'si Açıklandı",
summary:"Haftanın en değerli oyuncusu performansıyla dikkat çekti.",
image:"images/basket4.jpg",
link:"#",
tag:"EUROLEAGUE"
},

{
title:"Transfer Piyasasında Hareketlilik",
summary:"Kulüpler yeni sezon öncesi kadrolarını güçlendirmeye devam ediyor.",
image:"images/basket5.jpg",
link:"#",
tag:"TRANSFER"
}

];

const basketArea = document.getElementById("basket-area");

basketArea.innerHTML = `

<div class="basket-layout">

<div class="basket-feature">

<img src="${basketHaberler[0].image}">

<div class="basket-overlay">

<span>${basketHaberler[0].tag}</span>

<h2>${basketHaberler[0].title}</h2>

<p>${basketHaberler[0].summary}</p>

<a href="${basketHaberler[0].link}">
Haberi Oku →
</a>

</div>

</div>

<div class="basket-side">

${basketHaberler.slice(1).map(haber=>`

<a class="basket-small" href="${haber.link}">

<img src="${haber.image}">

<div>

<span>${haber.tag}</span>

<h4>${haber.title}</h4>

</div>

</a>

`).join("")}

</div>

</div>

`;
