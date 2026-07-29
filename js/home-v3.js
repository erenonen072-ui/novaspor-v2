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


function haberleriGoster(alan, liste){


    const container = document.getElementById(alan);


    if(!container || !liste) return;



    container.innerHTML = "";



    liste.forEach(haber=>{


        container.innerHTML += `


        <article class="news-card">


            <img 
            src="${haber.resim}" 
            loading="lazy"
            alt="${haber.baslik}"
            >



            <div class="news-info">



                <span class="news-tag">

                    ${haber.kategori}

                </span>




                <h3>

                    ${haber.baslik}

                </h3>





                <p>

                    ${haber.aciklama || ""}

                </p>





                <div class="news-bottom">


                    <a href="${haber.link}" target="_blank">

                        Haberi Oku →

                    </a>


                </div>




            </div>



        </article>



        `;



    });


}
/* ========================= */
/* COOKIE */
/* ========================= */

.cookie-box{

position:fixed;

bottom:20px;

left:50%;

transform:translateX(-50%);

width:min(92%,900px);

background:#ffffff;

border-radius:18px;

padding:22px;

display:flex;

justify-content:space-between;

align-items:center;

gap:25px;

box-shadow:0 15px 40px rgba(0,0,0,.18);

z-index:9999;

animation:cookieShow .5s ease;

}

.cookie-left{

display:flex;

align-items:flex-start;

gap:18px;

}

.cookie-icon{

font-size:42px;

}

.cookie-content h3{

margin-bottom:8px;

font-size:20px;

font-weight:700;

}

.cookie-content p{

line-height:1.7;

font-size:15px;

color:#555;

}

.cookie-content a{

color:#ffb400;

font-weight:700;

text-decoration:none;

}

.cookie-buttons{

display:flex;

gap:12px;

}

.cookie-btn{

padding:12px 22px;

border:none;

border-radius:10px;

font-weight:600;

cursor:pointer;

transition:.25s;

}

.cookie-btn.primary{

background:#ffb400;

color:#111;

}

.cookie-btn.primary:hover{

transform:translateY(-2px);

}

.cookie-btn.secondary{

background:#ececec;

}

.cookie-btn.secondary:hover{

background:#ddd;

}

@media(max-width:850px){

.cookie-box{

flex-direction:column;

align-items:flex-start;

}

.cookie-buttons{

width:100%;

}

.cookie-btn{

flex:1;

}

}

@keyframes cookieShow{

from{

opacity:0;

transform:translate(-50%,50px);

}

to{

opacity:1;

transform:translate(-50%,0);

}

}
