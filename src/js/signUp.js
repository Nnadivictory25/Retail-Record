const signUpBtn = document.querySelector("#signUpBtn");
const signUpForm = document.querySelector("#sign-up-form");
const body = document.querySelector("body");
const signUpEl = document.querySelector(".signUp");


// const addUserLocation = async (location, email) => {
//     const { data, error } = await supabase
//     .from('rr_users_location')
//     .insert({email: email, location: location })
//     .select('*')
    
//     if (data) {
//       console.log('updated user location successfully !')
//     }
  
//     error && console.log(error)
//   }

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const businessName = signUpForm.querySelector("#business-name").value;
  const location = signUpForm.querySelector("#location").value;
  const email = signUpForm.querySelector("#email").value;
  const password = signUpForm.querySelector("#password").value;

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        businessName: businessName,
        location: location,
      },
    },
  });

  console.log(data, error);

  if (data.user) {
    signUpEl.remove();
    console.log("sucess", data.user);
    body.innerHTML += `
    <section class="relative h-[90vh] mt-10 lg:mt-3 px-5">
        <div class="confettiCtn absolute w-full inset-x-0 z-[-1]">
            <img class="mx-auto" src="/images/confetti-29.gif" alt="">

        </div>
        <div class="imgCtn z-50">
            <img class="w-40 mx-auto" src="/images/undraw_mail_sent_re_0ofv.svg" alt="email sent illustration">
        </div>
        <h1 class="text-center my-2">Account Created Succesfully !</h1>
        <p class="text-center">One more thing ! Please check your email and confirm your account registration.</p>
    </section>
      `;


  } else if (error) {
    alert(error);
  }
});
