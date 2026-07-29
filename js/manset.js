// ======================================
// NOVASPOR OTOMATİK MANŞET SİSTEMİ
// ======================================

let tumHaberler = [];


// Haber listelerini birleştir
if (window.superLigHaberleri) {
    tumHaberler.push(...window.superLigHaberleri);
}

if (window.lig1Haberleri) {
    tumHaberler.push(...window.lig1Haberleri);
}

if (window.lig2Haberleri) {
    tumHaberler.push(...window.lig2Haberleri);
}

if (window.lig3Haberleri) {
    tumHaberler.push(...window.lig3Haberleri);
}

if (window.avrupaHaberleri) {
    tumHaberler.push(...window.avrupaHaberleri);
}

if (window.basketbolHaberleri) {
    tumHaberler.push(...window.basketbolHaberleri);
}

if (window.transferHaberleri) {
    tumHaberler.push(...window.transferHaberleri);
}



// İlk haberi manşet yap
const mansetHaber = tumHaberler[0];


const heroImage = document.getElementById("hero-image");
const heroTitle = document.getElementById("hero-title");
const heroText = document.getElementById("hero-text");
const heroLink = document.getElementById("hero-link");
const heroTag = document.querySelector(".hero-tag");



if (mansetHaber && heroImage && heroTitle && heroText && heroLink) {


    heroImage.src = mansetHaber.resim;
    heroImage.alt = mansetHaber.baslik;


    heroTitle.textContent = mansetHaber.baslik;


    heroText.textContent =
    mansetHaber.ozet || 
    mansetHaber.aciklama ||
    "NovaSpor'dan son dakika spor gelişmeleri.";


    heroLink.href = mansetHaber.link || "#";


    if(heroTag){
        heroTag.textContent = mansetHaber.kategori || "SON DAKİKA";
    }

}
