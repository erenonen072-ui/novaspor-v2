// ======================================
// NOVASPOR MANŞET HABERİ
// ======================================

const mansetHaber = {
    baslik: "Galatasaray'dan Dünya Yıldızına Dev Teklif",
    aciklama: "Sarı-kırmızılı ekip yeni sezon öncesi transfer çalışmalarını hızlandırdı.",
    resim: "images/haber1.jpg",
    link: "haberler.html",
    kategori: "SON DAKİKA"
};

const heroImage = document.getElementById("hero-image");
const heroTitle = document.getElementById("hero-title");
const heroText = document.getElementById("hero-text");
const heroLink = document.getElementById("hero-link");

if (heroImage && heroTitle && heroText && heroLink) {
    heroImage.src = mansetHaber.resim;
    heroImage.alt = mansetHaber.baslik;

    heroTitle.textContent = mansetHaber.baslik;
    heroText.textContent = mansetHaber.aciklama;

    heroLink.href = mansetHaber.link;
}
