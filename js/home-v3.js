document.addEventListener("DOMContentLoaded",()=>{


    // ⚽ Süper Lig
    haberleriGoster(
        "superlig-container",
        superLigHaberleri
    );


    // 🥈 1. Lig
    haberleriGoster(
        "lig1-container",
        lig1Haberleri
    );


    // 🥉 2. Lig
    haberleriGoster(
        "lig2-container",
        lig2Haberleri
    );


    // 🏅 3. Lig
    haberleriGoster(
        "lig3-container",
        lig3Haberleri
    );


    // 🏆 Avrupa
    haberleriGoster(
        "avrupa-container",
        avrupaHaberleri
    );


    // 🔄 Transfer
    haberleriGoster(
        "transfer-container",
        transferHaberleri
    );


    // 🏀 Basketbol
    haberleriGoster(
        "basketbol-container",
        basketbolHaberleri
    );



    // 📱 Mobil Menü

    const menuBtn = document.querySelector(".menu-btn");

    const navbar = document.querySelector(".navbar");


    if(menuBtn){

        menuBtn.addEventListener("click",()=>{

            navbar.classList.toggle("active");

        });

    }


});





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
                    ${haber.aciklama}
                </p>



                <div class="news-bottom">


                    <a href="${haber.link}">
                        Haberi Oku →
                    </a>


                </div>


            </div>


        </article>


        `;


    });


}
