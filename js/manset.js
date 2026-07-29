// ======================================
// NOVASPOR MANŞET HABERLERİ
// ======================================

const mansetHaberleri = [

{
    baslik: "Fenerbahçe'den Mason Greenwood Hamlesi Resmileşti",
    aciklama: "Fenerbahçe'nin transfer gündemindeki Mason Greenwood gelişmesi büyük ilgi gördü.",
    resim: "images/hq720.jpg",
    link: "https://sites.google.com/view/novassporr/haberler_1/fenerbahçeden-mason-greenwood-hamlesi-resmileşti?authuser=0",
    kategori: "TRANSFER"
},


{
    baslik: "Beşiktaş'tan Dev Transfer: Leandro Trossard Resmen Siyah-Beyazlı",
    aciklama: "Beşiktaş transfer çalışmalarında önemli bir hamle yaptı.",
    resim: "images/leandro-trossard-saglik-kontrolunden-gecti.jpg",
    link: "https://sites.google.com/view/novassporr/haberler_1/beşiktaştan-dev-transfer-leandro-trossard-resmen-siyah-beyazlı?authuser=0",
    kategori: "TRANSFER"
},


{
    baslik: "Son Dakika: Galatasaray'dan Can Uzun Hamlesi",
    aciklama: "Galatasaray transfer çalışmalarını hızlandırdı.",
    resim: "images/can uzun.jpg",
    link: "https://sites.google.com/view/novassporr/haberler_1/son-dakika-galatasaraydan-can-uzun-hamlesi?authuser=0",
    kategori: "SON DAKİKA"
}

];


// İlk manşeti göster

const mansetHaber = mansetHaberleri[0];


const heroImage = document.getElementById("hero-image");
const heroTitle = document.getElementById("hero-title");
const heroText = document.getElementById("hero-text");
const heroLink = document.getElementById("hero-link");
const heroTag = document.querySelector(".hero-tag");


if(heroImage && heroTitle && heroText && heroLink){

    heroImage.src = mansetHaber.resim;

    heroImage.alt = mansetHaber.baslik;

    heroTitle.textContent = mansetHaber.baslik;

    heroText.textContent = mansetHaber.aciklama;

    heroLink.href = mansetHaber.link;


    if(heroTag){
        heroTag.textContent = mansetHaber.kategori;
    }

}
