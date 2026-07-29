// ==========================
// NOVASPOR - 2. LİG
// ==========================

const lig2Haberleri = [

{
    kategori: "TRANSFER",
    baslik: "Menemen FK'dan Orta Sahaya Güçlü Takviye: Deneyimli İsim Resmen Kadroda",
    resim: "images/MENEMEN.png",
    link: "https://sites.google.com/view/novassporr/2-lig-haberleri/menemen-fkdan-orta-sahaya-güçlü-takviye-deneyimli-isim-resmen-kadroda",
    saat: "Az önce"
},

{
    kategori: "TRANSFER",
    baslik: "Çorum FK'dan Savunmaya Güçlü Takviye: Andrei Borza Resmen İmzayı Attı",
    resim: "images/ÇORUM.png",
    link: "https://sites.google.com/view/novassporr/2-lig-haberleri/çorum-fkdan-savunmaya-güçlü-takviye-andrei-borza-resmen-imzayı-attı?authuser=0",
    saat: "Az önce"
},
{
    kategori: "2. LİG",
    baslik: "2. Lig Ekipleri Hazırlıklarını Sürdürüyor",
    resim: "images/2lig3.jpg",
    link: "https://sites.google.com/view/novassporr/2-lig-haberleri/hazirlik",
    saat: "1 saat önce"
}

];

const lig2Container = document.getElementById("lig2-container");

if (lig2Container) {

    lig2Haberleri.forEach(haber => {

        lig2Container.innerHTML += `

        <article class="news-card">

            <img src="${haber.resim}" alt="${haber.baslik}">

            <div class="news-info">

                <span class="news-tag">${haber.kategori}</span>

                <h3>${haber.baslik}</h3>

                <div class="news-bottom">

                    <span>🕒 ${haber.saat}</span>

                    <a href="${haber.link}" target="_blank">

                        Haberi Oku

                    </a>

                </div>

            </div>

        </article>

        `;

    });

}
