const fadeEl = document.querySelector(".fade-in");
const heroText = document.querySelector(".hero__text");
const words = ["more efficient", "faster", "easier"];
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
if (heroText) {
  setTimeout(() => {
    setInterval(changeWord, 5000);
  }, 2000);
}

if (document.querySelector(".input")) {
  const inputs = Array.from(document.querySelectorAll(".input"));
  const btn = document.querySelector("button");
  const form = document.querySelector("#form");

  inputs.forEach((input) => {
    input.addEventListener("keyup", validateInput);
  });

  const validateInput = () => {
    if (inputs.some((input) => input.value == "")) {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  }
}
