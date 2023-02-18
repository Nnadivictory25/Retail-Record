const SUPABASE_URL = "https://plxvbnykwsgwglpxusar.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseHZibnlrd3Nnd2dscHh1c2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5Nzk5OTYsImV4cCI6MTk5MTU1NTk5Nn0.4e6f--5uvLzay-Xduh0OIRF3fFK3AGHqdsAqMV6vUC0";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let userId;
const userInitials = localStorage.getItem("userInitials");
const profilePic = document.querySelector("#profilePic");
const body = document.querySelector("body");
const navToggler = document.querySelector("#navToggler");
const nav = document.querySelector(".nav");
let navActive = false;
profilePic.textContent = userInitials;

(async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    console.log(user);
    document.querySelector("#profilePic").textContent =  user.user_metadata.businessName[0];
    userId = user.id;
  } else {
    window.location.href = "/login.html"; // ! CHANGE URL
  }
})();

navToggler.addEventListener("click", () => {
  const left = nav.style.left === "-100%" ? "0" : "-100%";

  if (userId) {
    nav.style.left = left;
  }

  left === "-100%" ? (navActive = false) : (navActive = true);

  if (navActive) {
    body.addEventListener("click", (e) => {
      if (
        e.target !== navToggler &&
        e.target !== nav &&
        e.target !== nav.children[0]
      ) {
        nav.style.left = "-100%";
      }
    });
  }
});

const selectedCategory = JSON.parse(localStorage.getItem("selectedCategory"))
const selectedCategoryEl = document.querySelector("#selectedRecordEl");
const totalEl = document.querySelector("#catTotal");

if (selectedCategory) {
  selectedCategoryEl.innerHTML = `
  Manage record for <span class="text-blue font-bold capitalize">${selectedCategory?.category}</span>
  `;
  totalEl.textContent = `Total : ₦${selectedCategory?.total.toLocaleString()}`;
} else {
  body.innerHTML = '<p class="font-bold text-3xl text-center text-red-600 mt-20"> 404 , PAGE NOT FOUND !!</p>';
}
