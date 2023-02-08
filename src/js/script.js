const fadeEl = document.querySelector(".fade-in");
const heroText = document.querySelector(".hero__text");
const inputs = Array.from(document.querySelectorAll(".input"));
const btn = document.querySelector("button");
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

const validateInput = () => {
  if (inputs.some((input) => input.value == "")) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
};

if (window.location.href.includes("contact")) {
  const form = document.querySelector("#form");

  inputs.forEach((input) => {
    input.addEventListener("keyup", validateInput);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
      btn.innerHTML = `Sending <i class="bi bi-send-fill"></i>`;
      btn.disabled = true
    emailjs.sendForm("service_0f19o8c", "template_m1ot4np", form).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        alert("Something went wrong! Please try again.");
        window.location.reload();
        console.log("FAILED...", error);
      }
    );
  });
}
