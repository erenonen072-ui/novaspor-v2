// ======================================
// NovaSpor Ortak Haber Kartı Oluşturucu
// ======================================

function renderNews(containerId, haberler) {
    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    haberler.forEach(haber => {
        container.innerHTML += `
            <article class="news-card">

                <img src="${haber.resim}" alt="${haber.baslik}">

                <div class="news-info">

                    <span class="news-tag">
                        ${haber.kategori}
                    </span>

                    <h3>
                        ${haber.baslik}
                    </h3>

                    ${haber.aciklama ? `
                    <p>
                        ${haber.aciklama}
                    </p>
                    ` : ""}

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
