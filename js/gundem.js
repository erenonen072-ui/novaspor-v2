// ======================================
// NOVASPOR GÜNDEM
// ======================================
const gundemHaberleri = [
    transferHaberleri[0],
    superLigHaberleri[0],
    lig2Haberleri[0],
    lig1Haberleri[0]
];

const container = document.getElementById("gundem-container");

if (container) {

    container.innerHTML = "";

    gundemHaberleri.forEach(haber => {

        container.innerHTML += `
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
