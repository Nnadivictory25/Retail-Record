const signUpBtn = document.querySelector("#signUpBtn");
const signUpForm = document.querySelector("#sign-up-form");
const body = document.querySelector("body");
const signUpEl = document.querySelector(".signUp");

const SUPABASE_URL = "https://plxvbnykwsgwglpxusar.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseHZibnlrd3Nnd2dscHh1c2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5Nzk5OTYsImV4cCI6MTk5MTU1NTk5Nn0.4e6f--5uvLzay-Xduh0OIRF3fFK3AGHqdsAqMV6vUC0";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

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
  signUpBtn.innerHTML = `
    <img class="w-14" src="/images/pulse-loading.gif" alt="">
    `;
  const businessName = signUpForm.querySelector("#businessName").value;
  const location = signUpForm.querySelector("#location").value;
  const email = signUpForm.querySelector("#email").value;
  const password = signUpForm.querySelector("#password").value;

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: "http://localhost:3000/welcome.html", //! CHANGE URL
      data: {
        businessName: businessName,
        location: location,
      },
    },
  });

  data && console.log(data);

  if (data.user && data.user.identities.length > 0) {
    setTimeout(() => {
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
    }, 2000);
  }

  if (data.user && data.user.identities.length === 0) {
    signUpForm.querySelector("#email").classList.toggle("err");
    signUpForm.querySelector("#errMsg").classList.toggle("hidden");

    setTimeout(() => {
      signUpForm.querySelector("#email").classList.toggle("err");
        signUpForm.querySelector("#errMsg").classList.toggle("hidden");
        signUpBtn.innerHTML = 'Sign Up'
    }, 5000);
  }

  error && console.log(error);
});
