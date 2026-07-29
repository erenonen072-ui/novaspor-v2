document.addEventListener("DOMContentLoaded",()=>{


const searchBtn=document.querySelector(".icon-btn");

const searchBox=document.querySelector(".search-box");

const input=document.getElementById("searchInput");

const results=document.getElementById("searchResults");



if(!searchBtn) return;



searchBtn.addEventListener("click",()=>{

searchBox.classList.toggle("active");

});



input.addEventListener("input",()=>{


let kelime=input.value.toLowerCase();


results.innerHTML="";


if(kelime.length<2) return;



let tumHaberler=[

...(typeof superligHaberleri!="undefined"?superligHaberleri:[]),

...(typeof basketbolHaberleri!="undefined"?basketbolHaberleri:[]),

...(typeof avrupaHaberleri!="undefined"?avrupaHaberleri:[]),

...(typeof transferHaberleri!="undefined"?transferHaberleri:[])

];



tumHaberler
.filter(haber=>

haber.baslik.toLowerCase().includes(kelime)

)
.forEach(haber=>{


results.innerHTML += `

<div class="search-item">

${haber.baslik}

</div>

`;


});


});


});
