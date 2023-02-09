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
  var verifyCallback = function (response) {
    alert(response);
  };
  var onloadCallback = function () {
    mainWidget = grecaptcha.enterprise.render("recaptcha", {
      sitekey: " 6LfzDUYkAAAAAExZEJBrJLkpVVdJjL2D6quRu0E9",
    });
  };
  const form = document.querySelector("#form");
  let token;

  inputs.forEach((input) => {
    input.addEventListener("keyup", validateInput);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    token = grecaptcha.enterprise.getResponse(mainWidget);
    console.log(token);
    btn.innerHTML = `Sending <i class="bi bi-send-fill"></i>`;
    btn.disabled = true;

    var data = {
      service_id: "service_0f19o8c",
      template_id: "template_m1ot4np",
      user_id: "BBHK4CoORgSaMhZIR",
      template_params: {
        'full-name': document.querySelector('#fullName').value,
        'email': document.querySelector('#email').value,
        'message': document.querySelector('#message').value,
          'g-recaptcha-response': token
      }
    };
    
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function() {
      console.log('Your mail is sent!');
    }).fail(function(error) {
      console.log('Oops... ' + JSON.stringify(error));
    });
  });
}
