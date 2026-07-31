window.superLigTable = [

{
sira:1,
takim:"Amed Sportif Faaliyetler",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:2,
takim:"Beşiktaş",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:3,
takim:"Corendon Alanyaspor",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:4,
takim:"Çaykur Rizespor",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:5,
takim:"Çorum FK",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:6,
takim:"Erzurumspor FK",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:7,
takim:"Eyüpspor",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:8,
takim:"Fenerbahçe",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:9,
takim:"Galatasaray",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:10,
takim:"Gaziantep FK",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:11,
takim:"Gençlerbirliği",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:12,
takim:"Göztepe",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:13,
takim:"İstanbul Başakşehir",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:14,
takim:"Kasımpaşa",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:15,
takim:"Kocaelispor",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:16,
takim:"Konyaspor",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:17,
takim:"Samsunspor",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
},

{
sira:18,
takim:"Trabzonspor",
O:0,G:0,B:0,M:0,A:0,Y:0,AV:0,P:0
}

];


document.addEventListener("DOMContentLoaded",()=>{

let alan=document.getElementById("puanTablo");

if(!alan) return;


alan.innerHTML="";


superLigTable.forEach(t=>{


alan.innerHTML += `

<tr>

<td>${t.sira}</td>

<td>${t.takim}</td>

<td>${t.O}</td>

<td>${t.G}</td>

<td>${t.B}</td>

<td>${t.M}</td>

<td>${t.A}</td>

<td>${t.Y}</td>

<td>${t.AV}</td>

<td>${t.P}</td>

</tr>


`;


});


});
