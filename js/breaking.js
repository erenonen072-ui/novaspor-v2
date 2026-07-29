// ======================================
// NOVASPOR SON DAKİKA ŞERİDİ
// ======================================

const breakingNews = [
    "🔥 Galatasaray transfer gelişmeleri",
    "⚽ Fenerbahçe son dakika",
    "🦅 Beşiktaş gündemi",
    "🌊 Trabzonspor haberleri",
    "🏆 Avrupa Kupaları",
    "🥉 2. Lig transferleri",
    "🏀 Basketbol",
    "🚨 Son dakika gelişmeleri"
];

const breaking = document.getElementById("breaking-news");

if (breaking) {
    breaking.innerHTML = breakingNews.join(" • ");
}
