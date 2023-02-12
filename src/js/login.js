const SUPABASE_URL = "https://plxvbnykwsgwglpxusar.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseHZibnlrd3Nnd2dscHh1c2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5Nzk5OTYsImV4cCI6MTk5MTU1NTk5Nn0.4e6f--5uvLzay-Xduh0OIRF3fFK3AGHqdsAqMV6vUC0";
const supabase= supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let userSession = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    console.log(user)
}
userSession();

const loginForm = document.getElementById("login-form");
const googleAuthBtn = document.querySelector('#googleSignInBtn')


const signInWithGoogle = async () => {
    
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
        redirectTo: 'http://localhost:3000/welcome.html'
        }
    })
  

    if (data.session !== null) {
        console.log(data, data.session)
        userSession = data.session;
        console.log(userSession)
    }
    
    if (error) {
      console.error(error)
    }
}
  
googleAuthBtn.addEventListener('click', signInWithGoogle)