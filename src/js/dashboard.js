const SUPABASE_URL = "https://plxvbnykwsgwglpxusar.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseHZibnlrd3Nnd2dscHh1c2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5Nzk5OTYsImV4cCI6MTk5MTU1NTk5Nn0.4e6f--5uvLzay-Xduh0OIRF3fFK3AGHqdsAqMV6vUC0";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const navToggler = document.querySelector("#navToggler");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");
let loggedUser = null;
let userId;
let navActive = false;

(async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    console.log(user);
    loggedUser = user;
    userId = loggedUser.id;

    loadName.remove();
    welcomeMsgEl.innerHTML += `
        <p id="bussinessName" class="text-xl">${loggedUser.user_metadata.businessName}</p>
        `;
  }

  console.log(userId);
  renderDashboard();
})();

navToggler.addEventListener("click", () => {
  const left = nav.style.left === "-100%" ? "0" : "-100%";

  if (loggedUser) {
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

const logOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error.message);
    alert(error.message);
  }
  loggedUser = null;
  userId = null;
  
  window.location.href = "/login.html"; //! change url !!!
};



// ! Dashboard rendering
const dashboardEl = document.querySelector(".dashboard");
const categoriesEl = document.querySelector(".categories__ctn");
const welcomeMsgEl = document.querySelector(".dashboard__welcomeMsg");
let categories;
const nameEl = welcomeMsgEl.querySelector("#loadName");
const loadingDashboard = document.querySelector("#loadingDashboard");

const now = new Date();
const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};
const locale = navigator.language;
const date = new Intl.DateTimeFormat(locale, options).format(now);

const renderDashboard = async () => {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("user_id", userId);

  error ? console.error(error) : console.log(data);

  categories = data;

  if (categories.length === 0) {
    loadingDashboard.remove();
    dashboardEl.innerHTML += `
        <div class="dashboard__salesSummary bg-blue text-white rounded lg:px-10 px-5 py-3 mt-5 lg:mt-0 shadow-md">
            <p class="text-xl font-medium">Total Sales</p>
            <p class="text-slate-300">As of  ${date}</p>
            <p class="totalSales text-lg"><span class="text-sm">₦</span>0</p>
       </div>
        `;
  } else {
    const total = categories.reduce((a, b) => a.total + b.total, 0);
    dashboardEl.innerHTML += `
        <div class="dashboard__salesSummary bg-blue text-white rounded lg:px-10 px-5 py-3 mt-5 lg:mt-0 shadow-md">
            <p class="text-xl font-medium">Total Sales</p>
            <p class="text-slate-300">As of  ${date}</p>
            <p class="totalSales text-lg"><span class="text-sm">₦</span>${total}</p>
       </div>
        `;
  }

  renderCategories();
};


// ! CATEGORIES RENDERING
const renderCategories = async () => {
  if (categories.length === 0) {
    categoriesEl.innerHTML =
      '<p class="text-center text-xl font-semibold text-blue mt-5">No categories found !</p>';
  } else {
      categoriesEl.innerHTML = ''

      categories.map(category => {
          const { id, name, total } = category;
          categoriesEl.innerHTML += `
          <div class="category bg-blue text-white px-5 rounded py-4 relative shadow-md">
            <p class="category__name text-lg font-medium underline">${name}</p>
            <div class="totalCtn flex items-center gap-x-1 pt-3">
                <p>Total :</p>
                <p class="thisSales"><span class="text-sm">₦</span>${total}</p>
            </div>
            <i title="Add Record" class="bi bi-plus-lg absolute right-5 text-black bg-white rounded-full px-2 py-1 text-xl top-[30%] transition-all hover:bg-slate-200 cursor-pointer"></i>
            <i onclick="deleteCategory(${id})" title="Delete Category" class="bi bi-x-circle-fill absolute top-[-.5rem] text-white rounded-full px-1 bg-opacity-40 bg-black right-[-.4rem] transition-all hover:bg-opacity-60 cursor-pointer"></i>
        </div>  
          `
      })
  }
};



// ! ADD CATEGORY MODAL OPENING
const addCategoryModalEl = document.querySelector(".modal");
