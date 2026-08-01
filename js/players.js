const players = [

{
name:"Zeki Çelik",
image:"images/zeki-celik.jpg",
position:"Defans",
club:"Roma",
birth:"17.02.1997",
caps:50,
goals:2,
number:19
},

{
name:"Hakan Çalhanoğlu",
image:"images/hakan-calhanoglu.jpg",
position:"Orta Saha",
club:"Inter",
birth:"08.02.1994",
caps:108,
goals:22,
number:10
},

{
name:"İsmail Yüksek",
image:"images/ismail-yuksek.jpg",
position:"Orta Saha",
club:"Fenerbahçe",
birth:"26.01.1999",
caps:34,
goals:1,
number:16
},

{
name:"Kaan Ayhan",
image:"images/kaan-ayhan.jpg",
position:"Orta Saha",
club:"Galatasaray",
birth:"10.11.1994",
caps:74,
goals:6,
number:22
},

{
name:"Orkun Kökçü",
image:"images/orkun-kokcu.jpg",
position:"Orta Saha",
club:"Beşiktaş",
birth:"29.12.2000",
caps:53,
goals:5,
number:6
},

{
name:"Salih Özcan",
image:"images/salih-ozcan.jpg",
position:"Orta Saha",
club:"Borussia Dortmund",
birth:"11.01.1998",
caps:32,
goals:1,
number:5
},

{
name:"Kenan Yıldız",
image:"images/kenan-yildiz.jpg",
position:"Forvet",
club:"Juventus",
birth:"04.05.2005",
caps:21,
goals:3,
number:10
}

];
/* =========================
   OYUNCU KARTLARI OLUŞTURMA
========================= */

const playerContainer = document.getElementById("playersContainer");

function oyunculariGoster(){

if(!playerContainer) return;

playerContainer.innerHTML="";

players.forEach(player=>{

playerContainer.innerHTML += `

<div class="player-card">

<img src="${player.image}" 
alt="${player.name}">

<div class="player-info">

<h3>${player.name}</h3>

<p>⚽ Mevki: ${player.position}</p>

<p>🏟 Kulüp: ${player.club}</p>

<p>🎂 Doğum: ${player.birth}</p>

<p>🇹🇷 Milli Maç: ${player.caps}</p>

<p>🥅 Gol: ${player.goals}</p>

<span>Numara: ${player.number}</span>

</div>

</div>

`;

});

}


oyunculariGoster();
