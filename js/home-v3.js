// ==========================
// NOVASPOR HOME V3 JS
// ==========================


document.addEventListener("DOMContentLoaded",()=>{


    // ⚽ Süper Lig
    haberleriGoster(
        "superlig-container",
        window.superLigHaberleri
    );


    // 🥈 1. Lig
    haberleriGoster(
        "lig1-container",
        window.lig1Haberleri
    );


    // 🥉 2. Lig
    haberleriGoster(
        "lig2-container",
        window.lig2Haberleri
    );


    // 🏅 3. Lig
    haberleriGoster(
        "lig3-container",
        window.lig3Haberleri
    );


    // 🌍 Avrupa
    haberleriGoster(
        "avrupa-container",
        window.avrupaHaberleri
    );


    


    // 🏀 Basketbol
    haberleriGoster(
        "basketbol-container",
        window.basketbolHaberleri
    );
    // 🏐 Voleybol
haberleriGoster(
    "voleybol-container",
    window.voleybolHaberleri
);



    // 📱 MOBİL MENÜ

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");


    if(menuBtn && navbar){

        menuBtn.addEventListener("click",()=>{

            navbar.classList.toggle("active");

        });

    }



    // ⬆️ YUKARI ÇIK BUTONU

    const topBtn = document.getElementById("topBtn");


    if(topBtn){

        window.addEventListener("scroll",()=>{

            if(window.scrollY > 300){

                topBtn.style.display="block";

            }else{

                topBtn.style.display="none";

            }

        });


        topBtn.addEventListener("click",()=>{

            window.scrollTo({

                top:0,
                behavior:"smooth"

            });

        });

    }



});






// ==========================
// HABER KARTI OLUŞTURMA
// ==========================
function haberleriGoster(containerID, haberler){

const container = document.getElementById(containerID);

if(!container || !haberler) return;

container.innerHTML = "";


haberler.forEach(haber=>{

container.innerHTML += `

<article class="news-card" data-link="${haber.link || ''}">

<div class="news-image">

<img src="${encodeURI(haber.resim)}" alt="${haber.baslik}">

</div>


<div class="news-content">

<h3>
${haber.baslik}
</h3>


<p>
${haber.aciklama || ""}
</p>


</div>

</article>

`;

});


// Kart tıklama

document.querySelectorAll(".news-card").forEach(card=>{

card.addEventListener("click",()=>{

const link = card.dataset.link;

if(link){

window.open(link,"_blank");

}

});

});


}
// ==========================
// COOKIE
// ==========================
const cookieBox = document.getElementById("cookieBox");
const accept = document.getElementById("cookieAccept");
const reject = document.getElementById("cookieReject");

if (cookieBox) {

    if (localStorage.getItem("cookieConsent")) {
        cookieBox.style.display = "none";
    }

    if (accept) {
        accept.onclick = () => {
            localStorage.setItem("cookieConsent", "accepted");
            cookieBox.style.display = "none";
        };
    }

    if (reject) {
        reject.onclick = () => {
            localStorage.setItem("cookieConsent", "rejected");
            cookieBox.style.display = "none";
        };
    }

}
// ==========================
// DARK MODE
// ==========================

const darkBtn = document.getElementById("darkBtn");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

if(darkBtn){
    darkBtn.onclick = () => {
        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            localStorage.setItem("theme","dark");
        }else{
            localStorage.setItem("theme","light");
        }
    };
}
// ==========================
// PROFESYONEL ARAMA
// ==========================

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const tumHaberler = [
...(window.superLigHaberleri || []),
...(window.lig1Haberleri || []),
...(window.lig2Haberleri || []),
...(window.lig3Haberleri || []),
...(window.avrupaHaberleri || []),
...(window.basketbolHaberleri || [])
];

searchBtn.addEventListener("click",()=>{

searchBox.classList.toggle("active");

if(searchBox.classList.contains("active")){
searchInput.focus();
}

});

searchInput.addEventListener("input",()=>{

const kelime = searchInput.value.toLowerCase().trim();

searchResults.innerHTML="";

if(kelime===""){
return;
}

const sonuc = tumHaberler.filter(h=>{

return (

h.baslik.toLowerCase().includes(kelime) ||

(h.aciklama||"").toLowerCase().includes(kelime)

);

});

if(sonuc.length===0){

searchResults.innerHTML=`
<div class="no-result">
😔 Sonuç bulunamadı.
</div>
`;

return;

}

sonuc.slice(0,8).forEach(h=>{

searchResults.innerHTML+=`

<a class="search-item" href="${h.link}" target="_blank">

<h4>${h.baslik}</h4>

<p>${h.aciklama||""}</p>

</a>

`;

});

});

document.addEventListener("click",(e)=>{

if(!searchBox.contains(e.target) && !searchBtn.contains(e.target)){

searchBox.classList.remove("active");

}

});

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

searchBox.classList.remove("active");

}

});
