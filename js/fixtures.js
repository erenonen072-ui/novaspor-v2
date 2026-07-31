let aktifHafta = 1;
let tumMaclar = [];

async function fiksturYukle() {
    try {
        const res = await fetch("/api/fixtures");
        const data = await res.json();

        tumMaclar = data.response;

        fiksturGoster();
    } catch (e) {
        document.getElementById("fixtureList").innerHTML =
            "<p>Fikstür yüklenemedi.</p>";
        console.error(e);
    }
}

function fiksturGoster() {

    const alan = document.getElementById("fixtureList");

    alan.innerHTML = "";

    const maclar = tumMaclar.filter(
        m => m.league.round.includes(aktifHafta)
    );

    maclar.forEach(mac => {

        alan.innerHTML += `
        <div class="fixture-card">

            <div class="team">
                <img src="${mac.teams.home.logo}">
                <span>${mac.teams.home.name}</span>
            </div>

            <div class="match-info">

                <strong>${mac.fixture.date.substring(11,16)}</strong>

                <small>${mac.fixture.status.short}</small>

                <b>VS</b>

            </div>

            <div class="team">
                <img src="${mac.teams.away.logo}">
                <span>${mac.teams.away.name}</span>
            </div>

            <div class="stadium">
            🏟 ${mac.fixture.venue.name}
            </div>

        </div>
        `;

    });

    document.getElementById("haftaNo").textContent =
        "Hafta " + aktifHafta;
}

function oncekiHafta(){
    if(aktifHafta>1){
        aktifHafta--;
        fiksturGoster();
    }
}

function sonrakiHafta(){
    if(aktifHafta<38){
        aktifHafta++;
        fiksturGoster();
    }
}

document.addEventListener("DOMContentLoaded",fiksturYukle);
