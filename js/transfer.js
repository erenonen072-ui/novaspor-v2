// ==========================
// NOVASPOR - TRANSFER
// ==========================

window.transferHaberleri = [

{
    kategori: "TRANSFER",
    baslik: "Galatasaray Dünya Yıldızını Bitiriyor",
    resim: "images/haber1.jpg",
    link: "#",
    saat: "30 dk önce"
},

{
    kategori: "TRANSFER",
    baslik: "Fenerbahçe'den Forvet Hamlesi",
    resim: "images/haber2.jpg",
    link: "#",
    saat: "1 saat önce"
},

{
    kategori: "TRANSFER",
    baslik: "Beşiktaş Yeni Stoperini Açıkladı",
    resim: "images/haber3.jpg",
    link: "#",
    saat: "2 saat önce"
}

];

const transferContainer = document.getElementById("transfer-container");

if (transferContainer) {

    transferContainer.innerHTML = "";

    transferHaberleri.forEach(haber => {

        transferContainer.innerHTML += `
        <article class="news-card">

            <img src="${haber.resim}" alt="${haber.baslik}">

            <div class="news-info">

                <span class="news-tag">${haber.kategori}</span>

                <h3>${haber.baslik}</h3>

                <div class="news-bottom">

                    <span>🕒 ${haber.saat}</span>

                    <a href="${haber.link}">
                        Haberi Oku
                    </a>

                </div>

            </div>

        </article>
        `;

    });

}
