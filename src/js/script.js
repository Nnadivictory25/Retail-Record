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

function checkRecaptcha() {
  btn.disabled = false;
}

if (window.location.href.includes("contact")) {
  let mainWidget;
  var onloadCallback = function () {
    mainWidget = grecaptcha.enterprise.render("recaptcha", {
      sitekey: " 6LfzDUYkAAAAAExZEJBrJLkpVVdJjL2D6quRu0E9",
    });
  };
  let token;
  const form = document.querySelector("#form");

  inputs.forEach((input) => {
    input.addEventListener("keyup", validateInput);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // token = grecaptcha.enterprise.getResponse(mainWidget);
    btn.innerHTML = `Sending <i class="bi bi-send-fill"></i>`;
    btn.disabled = true;

    emailjs.sendForm("service_0f19o8c", "template_m1ot4np", form).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        btn.innerHTML = `Message Sent !`;
        btn.disabled = false;
        btn.blur();
        setTimeout(() => {
          btn.innerHTML = `Send Message <i class="bi bi-send-fill"></i>`;
          form.reset();
        }, 2000);
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Something went wrong. Please try again later.");
        window.location.reload();
      }
    );
  });
}

// ! SIGN UP FUNCTIONS
let atSignUp = window.location.href.includes("sign-up");
function togglePass(ele) {
  const passInput = document.querySelector("#password");
  const type =
  passInput.getAttribute("type") === "password" ? "text" : "password";
  passInput.setAttribute("type", type);
  ele.classList.toggle("bi-eye-slash-fill");
}


if (atSignUp) { 
  const signUpForm = document.querySelector("#sign-up-form");
  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const businessName = signUpForm.querySelector("#business-name").value;
    const location = signUpForm.querySelector("#location").value;
    const email = signUpForm.querySelector("#email").value;
    const password = signUpForm.querySelector("#password").value;
  })

}