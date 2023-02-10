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

// ! INPUT VALIDATION
const validateInput = () => {
  if (inputs.some((input) => input.value == "")) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
};

const initFormValidation = () => {
  inputs.forEach((input) => {
    input.addEventListener("keyup", validateInput);
  });
}

// ! GOOGLE RECAPTCHA CALLBACK
function checkRecaptcha() {
  btn.disabled = false;
}

// ! CONTACT-US PAGE AND FORM FUNCTIONALITY
if (window.location.href.includes("contact")) {
  const contactUsEl = document.querySelector(".contactUs");
  const bodyEl = document.querySelector("body");

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
    btn.innerHTML = `Sending... <i class="bi bi-send-fill"></i>`;
    btn.disabled = true;

    emailjs.sendForm("service_0f19o8c", "template_m1ot4np", form).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setTimeout(() => {
          form.reset()
          contactUsEl.remove()
          // ! SUCCESS MESSAGE
          bodyEl.innerHTML += `
          <section class="px-5 lg:px-20 mt-12">
          <div class="success-checkmark my-5">
              <div class="check-icon">
                  <span class="icon-line line-tip"></span>
                  <span class="icon-line line-long"></span>
                  <div class="icon-circle"></div>
                  <div class="icon-fix"></div>
              </div>
          </div>
          <div id="orderPlacedText" class="container mx-auto text-center">
          <p class="font-semibold text-gray-500">Message Sent Succesfully !</p>
          <p class="font-semibold text-gray-500 mb-6">We will get back to you shortly !</p>
          <a href="/" class="text-[hsl(216,93%,44%)] underline"> Return Home</a>
         </div>
      </section>
          `
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

function togglePass(ele) {
  const passInput = document.querySelector("#password");
  const type =
  passInput.getAttribute("type") === "password" ? "text" : "password";
  passInput.setAttribute("type", type);
  ele.classList.toggle("bi-eye-slash-fill");
}


const SUPABASE_URL = "https://plxvbnykwsgwglpxusar.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseHZibnlrd3Nnd2dscHh1c2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5Nzk5OTYsImV4cCI6MTk5MTU1NTk5Nn04e6f--5uvLzay-Xduh0OIRF3fFK3AGHqdsAqMV6vUC0";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);