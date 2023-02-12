const SUPABASE_URL = "https://plxvbnykwsgwglpxusar.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseHZibnlrd3Nnd2dscHh1c2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5Nzk5OTYsImV4cCI6MTk5MTU1NTk5Nn0.4e6f--5uvLzay-Xduh0OIRF3fFK3AGHqdsAqMV6vUC0";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
let time = 5


const timerFunction = setInterval(() => {
    if (time === 0) {
        window.location.href = '/dashboard'
    }
    if (time > 0) {
        time--
    }

    document.querySelector('.timer').textContent = time
    
}, 1000);

const getUser = async () => {
    const welcomeEl = document.querySelector('#welcome')
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user)

    if (user) {
        welcomeEl.innerHTML += `
        <img class="w-56 mx-auto" src="/images/undraw_happy_news_re_tsbd.svg">

        <h1 class="text-center">Email Verification Successful !</h1>

        <p class="text-center text-lg">
            You will redirected to your dashboard in <span class="timer font-medium text-[hsl(216,93%,44%)]">5</span>
        </p>
        `
    } else {
        welcomeEl.innerHTML += `
        <h1 class="text-center mt-20">NOT AUTHORIZED !</h1>
        <a class="text-[hsl(216,93%,44%)] underline text-center mx-auto text-lg font-medium" href="/">Go back Home</a>
        `
    }
}
getUser()