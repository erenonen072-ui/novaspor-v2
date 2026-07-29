// ======================================
// NOVASPOR MANŞET HABERİ
// ======================================

const mansetHaber = {

    baslik: "Fenerbahçe'den Mason Greenwood Hamlesi Resmileşti",

    aciklama: "Fenerbahçe transfer çalışmalarına hız verirken Mason Greenwood hamlesi gündeme geldi.",

    resim: "images/haber1.jpg",

    link: "https://sites.google.com/view/novassporr/haberler_1/fenerbahçeden-mason-greenwood-hamlesi-resmileşti?authuser=0",

    kategori: "TRANSFER"

};


const heroImage = document.getElementById("hero-image");
const heroTitle = document.getElementById("hero-title");
const heroText = document.getElementById("hero-text");
const heroLink = document.getElementById("hero-link");
const heroTag = document.querySelector(".hero-tag");


if (heroImage && heroTitle && heroText && heroLink) {

    heroImage.src = mansetHaber.resim;

    heroImage.alt = mansetHaber.baslik;

    heroTitle.textContent = mansetHaber.baslik;

    heroText.textContent = mansetHaber.aciklama;

    heroLink.href = mansetHaber.link;


    if(heroTag){
        heroTag.textContent = mansetHaber.kategori;
    }

}
