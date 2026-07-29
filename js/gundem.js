// ======================================
// NOVASPOR GÜNDEM
// ======================================

const gundemHaberleri = [
    superLigHaberleri[0],
    transferHaberleri[0],
    lig2Haberleri[0],
    avrupaHaberleri[0]
];

const gundemContainer = document.getElementById("gundem-container");

if (gundemContainer) {

    gundemContainer.innerHTML = "";

    gundemHaberleri.forEach(haber => {

        gundemContainer.innerHTML += `

            <a href="${haber.link}">

                <img src="${haber.resim}" alt="${haber.baslik}">

                <div>

                    <span>${haber.kategori}</span>

                    <h4>${haber.baslik}</h4>

                </div>

            </a>

        `;

    });

}
