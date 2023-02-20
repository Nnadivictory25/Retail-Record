const SUPABASE_URL = "https://plxvbnykwsgwglpxusar.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseHZibnlrd3Nnd2dscHh1c2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5Nzk5OTYsImV4cCI6MTk5MTU1NTk5Nn0.4e6f--5uvLzay-Xduh0OIRF3fFK3AGHqdsAqMV6vUC0";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


let userSession;

let getUserSession = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
        window.location.href = "/dashboard";
    }
}

const loginForm = document.getElementById("login-form")
const loginBtn = document.querySelector('#loginBtn')
const errMsgEl = loginForm.querySelector('.errMsg')
const googleAuthBtn = document.querySelector('#googleSignInBtn')


const signInWithGoogle = async () => {
    
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
        redirectTo: 'http://localhost:3000/dashboard.html' //! change url
        }
    })
  

    if (data.session !== null) {
        console.log(data, data.session)
    }
    
    error && console.error(error)
    
}
googleAuthBtn.addEventListener('click', signInWithGoogle)


loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginBtn.innerHTML = `
    <img class="w-14" src="/images/pulse-loading.gif">
    `;

    const email = e.target.email.value;
    const password = e.target.password.value;

    
    const { data: { user }, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })
    
    if (user !== null) {
        window.location.href = "/dashboard.html"; //! CHANGE URL 
      } 
    
    if (error && error.message.includes('credentials')) {
        errMsgEl.classList.toggle('hidden')
        loginBtn.innerHTML = `
        Log In
        `;

        setTimeout(() => {
            errMsgEl.classList.toggle('hidden');
        }, 3000);
    }

    error && console.error(error);
    
})

getUserSession();