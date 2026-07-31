// ==============================
// NOVASPOR SÜPER LİG PUAN DURUMU
// ==============================

const superLigTable = [

{
sira:1,
takim:"Amed Sportif Faaliyetler",
logo:"amed.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:2,
takim:"Beşiktaş",
logo:"besiktas.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:3,
takim:"Corendon Alanyaspor",
logo:"alanyaspor.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:4,
takim:"Çaykur Rizespor",
logo:"rizespor.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:5,
takim:"Çorum FK",
logo:"corum.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:6,
takim:"Erzurumspor FK",
logo:"erzurumspor.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:7,
takim:"Eyüpspor",
logo:"eyupspor.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:8,
takim:"Fenerbahçe",
logo:"fenerbahce.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:9,
takim:"Galatasaray",
logo:"galatasaray.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:10,
takim:"Gaziantep FK",
logo:"gaziantep.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:11,
takim:"Gençlerbirliği",
logo:"genclerbirligi.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:12,
takim:"Göztepe",
logo:"goztepe.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:13,
takim:"İstanbul Başakşehir",
logo:"basaksehir.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:14,
takim:"Kasımpaşa",
logo:"kasimpasa.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:15,
takim:"Kocaelispor",
logo:"kocaelispor.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:16,
takim:"Konyaspor",
logo:"konyaspor.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:17,
takim:"Samsunspor",
logo:"samsunspor.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:18,
takim:"Trabzonspor",
logo:"trabzonspor.png.png",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
}

];


// TABLOYU OLUŞTUR

document.addEventListener("DOMContentLoaded",()=>{


const tablo=document.getElementById("puanTablo");


if(!tablo) return;


superLigTable.forEach(t=>{


tablo.innerHTML += `

<tr>

<td>${t.sira}</td>


<td class="team-name">

<img src="images/${t.logo}" 
onerror="this.src='images/default.png'">

${t.takim}

</td>


<td>${t.O}</td>

<td>${t.G}</td>

<td>${t.B}</td>

<td>${t.M}</td>

<td>${t.A}</td>

<td>${t.Y}</td>

<td>${t.AV}</td>

<td><b>${t.P}</b></td>


<tr class="${t.sira <= 4 ? 'avrupa' : t.sira >= 15 ? 'dusme' : ''}">

`;

});


});
