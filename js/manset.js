// ======================================
// NOVASPOR MANŞET SLIDER
// ======================================

window.mansetHaberleri = [

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


let aktifManşet = 0;


const heroImage = document.getElementById("hero-image");
const heroTitle = document.getElementById("hero-title");
const heroText = document.getElementById("hero-text");
const heroLink = document.getElementById("hero-link");
const heroTag = document.querySelector(".hero-tag");



function mansetGuncelle(){


    const haber = window.mansetHaberleri[aktifManşet];


    if(!haber) return;


    heroImage.src = haber.resim;

    heroImage.alt = haber.baslik;

    heroTitle.textContent = haber.baslik;

    heroText.textContent = haber.aciklama;

    heroLink.href = haber.link;


    if(heroTag){

        heroTag.textContent = haber.kategori;

    }

}




if(heroImage && heroTitle && heroText && heroLink){


    mansetGuncelle();


    setInterval(()=>{


        aktifManşet++;


        if(aktifManşet >= window.mansetHaberleri.length){

            aktifManşet = 0;

        }


        mansetGuncelle();


    },5000);


}
