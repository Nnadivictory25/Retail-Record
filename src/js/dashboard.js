const SUPABASE_URL = "https://plxvbnykwsgwglpxusar.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseHZibnlrd3Nnd2dscHh1c2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5Nzk5OTYsImV4cCI6MTk5MTU1NTk5Nn0.4e6f--5uvLzay-Xduh0OIRF3fFK3AGHqdsAqMV6vUC0";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


const navToggler = document.querySelector('#navToggler');
const nav = document.querySelector('.nav');
const body = document.querySelector('body')
let navActive = false;

navToggler.addEventListener('click', () => {
    const left = nav.style.left === '-100%' ? '0' : '-100%';

    nav.style.left = left

    left === '-100%' ? navActive = false : navActive = true;

    if (navActive) {
        body.addEventListener('click', (e) => { 
            if (e.target !== navToggler && e.target !== nav && e.target !== nav.children[0]) {
                nav.style.left = '-100%'
            }
        })
    } 
})