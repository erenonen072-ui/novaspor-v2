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


if(heroImage){

heroImage.src = haber.resim;
heroImage.alt = haber.baslik;

}


if(heroTitle){

heroTitle.textContent = haber.baslik;

}


if(heroText){

heroText.textContent = haber.aciklama;

}


if(heroLink){

heroLink.href = haber.link;
heroLink.target = "_blank";

}


if(heroTag){

heroTag.textContent = haber.kategori;

}

}



// İLERİ BUTONU

const nextBtn = document.getElementById("nextHero");

if(nextBtn){

nextBtn.addEventListener("click",()=>{

aktifManşet++;

if(aktifManşet >= window.mansetHaberleri.length){

aktifManşet = 0;

}

mansetGuncelle();

});

}



// GERİ BUTONU

const prevBtn = document.getElementById("prevHero");

if(prevBtn){

prevBtn.addEventListener("click",()=>{

aktifManşet--;

if(aktifManşet < 0){

aktifManşet = window.mansetHaberleri.length - 1;

}

mansetGuncelle();

});

}


// SAĞ OK
const nextBtn = document.getElementById("manset-next");

if(nextBtn){

nextBtn.onclick = ()=>{

aktifManşet++;

if(aktifManşet >= window.mansetHaberleri.length){
aktifManşet = 0;
}

mansetGuncelle();

};

}


// SOL OK
const prevBtn = document.getElementById("manset-prev");

if(prevBtn){

prevBtn.onclick = ()=>{

aktifManşet--;

if(aktifManşet < 0){
aktifManşet = window.mansetHaberleri.length - 1;
}

mansetGuncelle();

};

}
// OTOMATİK DEĞİŞİM

setInterval(()=>{

aktifManşet++;

if(aktifManşet >= window.mansetHaberleri.length){

aktifManşet = 0;

}

mansetGuncelle();

},5000);



// BAŞLAT

mansetGuncelle();
