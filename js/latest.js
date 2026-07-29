// ======================================
// NOVASPOR SON EKLENEN HABERLER
// ======================================

const latestContainer = document.getElementById("latest-news");

if (latestContainer) {

    // İlk 6 haberi göster
    const sonHaberler = tumHaberler.slice(0, 6);

    latestContainer.innerHTML = "";

    sonHaberler.forEach(haber => {

        latestContainer.innerHTML += `
            <article class="news-card">

                <img src="${haber.resim}" alt="${haber.baslik}">

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

                        <span>
                            🕒 ${haber.saat || ""}
                        </span>

                        <a href="${haber.link}">
                            Haberi Oku
                        </a>

                    </div>

                </div>

            </article>
        `;

    });

}
