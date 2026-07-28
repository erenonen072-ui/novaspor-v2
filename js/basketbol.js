// ==========================
// NOVASPOR BASKETBOL
// ==========================

const basketHaberler = [

{
title:"Fenerbahçe Beko'dan Güç Gösterisi! Yeni Transferlerle Hedef Bir Kez Daha Avrupa'nın Zirvesi",
summary:"Fenerbahçe Beko, yeni sezon öncesi kadrosunu güçlendirmeye devam ediyor. Sarı-lacivertli ekip, EuroLeague hedefi doğrultusunda yaptığı transferlerle dikkat çekiyor.",
image:"images/🏀 Fenerbahçe Beko'dan Güç Gösterisi! Yeni Transferlerle Hedef Bir Kez Daha Avrupa'nın Zirvesi.png",
link:"https://sites.google.com/view/novassporr/basketbol-haberleri/fenerbah%C3%A7e-bekodan-g%C3%BC%C3%A7-g%C3%B6sterisi-yeni-transferlerle-hedef-bir-kez-daha?authuser=0",
tag:"FENERBAHÇE BEKO"
},

{
title:"Alperen Şengün'den Sezon Öncesi İddialı Mesaj: 'Daha Güçlü Döneceğim'",
summary:"Milli yıldız Alperen Şengün, yeni sezon hazırlıklarını yoğun tempoda sürdürüyor. Hedefi kariyerinin en iyi sezonlarından birini geçirmek.",
image:"images/Alperen Şengün'ün sezon öncesi iddialı mesajı.png",
link:"https://sites.google.com/view/novassporr/basketbol-haberleri/alperen-%C5%9Feng%C3%BCnden-sezon-%C3%B6ncesi-iddial%C4%B1-mesaj-daha-g%C3%BC%C3%A7l%C3%BC-d%C3%B6nece%C4%9Fim?authuser=0",
tag:"NBA"
},

{
title:"Cedi Osman Yeni Sezon Öncesi Form Tutuyor! Hedef EuroLeague'de Zirve",
summary:"Milli basketbolcu Cedi Osman, yoğun antrenman temposuyla yeni sezona hazırlanıyor. Avrupa'da başarılı bir sezon geçirmek istiyor.",
image:"images/🏀 Cedi Osman Yeni Sezon Öncesi Form Tutuyor! Hedef EuroLeague'de Zirve.png",
link:"https://sites.google.com/view/novassporr/basketbol-haberleri/cedi-osman-yeni-sezon-%C3%B6ncesi-form-tutuyor-hedef-euroleaguede-zirve?authuser=0",
tag:"EUROLEAGUE"
},

{
title:"Shane Larkin'den Yeni Sezon Öncesi İddialı Açıklamalar: 'Kupalar İçin Mücadele Edeceğiz'",
summary:"Anadolu Efes'in yıldız oyun kurucusu Shane Larkin, yeni sezon öncesinde takımın hedeflerinin hem lig hem de Avrupa'da şampiyonluk olduğunu söyledi.",
image:"images/🏀 Shane Larkin'den Yeni Sezon Öncesi İddialı Açıklamalar! Kupalar İçin Mücadele Edeceğiz.png",
link:"https://sites.google.com/view/novassporr/basketbol-haberleri/shane-larkinden-yeni-sezon-%C3%B6ncesi-iddial%C4%B1-a%C3%A7%C4%B1klamalar-kupalar-i%C3%A7in-m%C3%BC?authuser=0",
tag:"ANADOLU EFES"
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
