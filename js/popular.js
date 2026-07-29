const populerHaberler = [

{
id:"gs-transfer",
baslik:"Galatasaray'dan Dev Transfer Hamlesi"
},

{
id:"fb-transfer",
baslik:"Fenerbahçe'de Son Dakika"
},

{
id:"bjk-transfer",
baslik:"Beşiktaş'ta Yeni Gelişme"
},

{
id:"ts-kamp",
baslik:"Trabzonspor Kampı Başladı"
},

{
id:"milli-takim",
baslik:"Milli Takım Kadrosu Açıklandı"
}

];


// Sayaçları getir

let okunmaSayilari = JSON.parse(
localStorage.getItem("okunmaSayilari")
) || {};



// Haber tıklama

function haberOkundu(id){

if(!okunmaSayilari[id]){

okunmaSayilari[id]=0;

}

okunmaSayilari[id]++;


localStorage.setItem(
"okunmaSayilari",
JSON.stringify(okunmaSayilari)
);

}



// Listeyi göster

function populerGoster(){


const alan=document.querySelector(".popular-news ol");


if(!alan) return;


alan.innerHTML="";


let sirali=[...populerHaberler].sort((a,b)=>{

return (okunmaSayilari[b.id]||0)
-
(okunmaSayilari[a.id]||0);

});


sirali.forEach(haber=>{


alan.innerHTML += `

<li>

<a href="#"
onclick="haberOkundu('${haber.id}')">

${haber.baslik}

</a>

<span>
${okunmaSayilari[haber.id]||0} görüntülenme
</span>

</li>

`;

});


}


document.addEventListener(
"DOMContentLoaded",
populerGoster
);
