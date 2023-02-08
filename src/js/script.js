const fadeEl = document.querySelector('.fade-in');
const heroText = document.querySelector('.hero__text');
const words = ['more efficient', 'faster', 'easier']
let count = 0;

function changeWord() {
    if (count === words.length) {
        count = 0;
    }
    heroText.innerHTML = `
    Recording your physical store sales have never been <span class="fade-in">${words[count]}</span> with RetailRecord
    `;
    count++;
}
if (fadeEl) {
    setTimeout(() => {
        setInterval(changeWord, 5000);
    }, 2000);
}