const sliderHaberleri = [

{
resim:"images/haber1.jpg.png",
baslik:"Galatasaray'dan Dev Transfer Hamlesi!",
aciklama:"Sarı-kırmızılı ekip yeni sezon öncesi çalışmalarını sürdürüyor."
},

{
resim:"images/haber2.jpg.png",
baslik:"Fenerbahçe'de Son Dakika Gelişmesi",
aciklama:"Sarı-lacivertli ekip transfer çalışmalarına devam ediyor."
},

{
resim:"images/haber3.jpg.png",
baslik:"Beşiktaş'tan Yeni Sezon Hazırlığı",
aciklama:"Siyah-beyazlı ekip güçlü bir kadro kurmak istiyor."
}

];


let sliderIndex=0;


function sliderDegistir(){

sliderIndex++;

if(sliderIndex >= sliderHaberleri.length){

sliderIndex=0;

}


const haber=sliderHaberleri[sliderIndex];


document.getElementById("hero-image").src=haber.resim;

document.getElementById("hero-title").innerText=haber.baslik;

document.getElementById("hero-text").innerText=haber.aciklama;


}


setInterval(sliderDegistir,5000);
