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
