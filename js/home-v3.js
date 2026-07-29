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
