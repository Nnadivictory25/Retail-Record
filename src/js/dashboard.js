const SUPABASE_URL = "https://plxvbnykwsgwglpxusar.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseHZibnlrd3Nnd2dscHh1c2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5Nzk5OTYsImV4cCI6MTk5MTU1NTk5Nn0.4e6f--5uvLzay-Xduh0OIRF3fFK3AGHqdsAqMV6vUC0";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const navToggler = document.querySelector("#navToggler");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");
const profilePic = document.querySelector("#profilePic");
const userInitials = localStorage.getItem("userInitials");
let loggedUser = null;
const bgColor = `hsl(216, 93%, 44%)`; // for toastify
let userId;
let navActive = false;

localStorage.removeItem("selectedCategory");
profilePic.textContent = userInitials;

(async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    console.log(user);
    loggedUser = user;
    localStorage.setItem("userInitials", user.user_metadata.businessName[0]);
    userId = loggedUser.id;
    localStorage.setItem("userId", userId);
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

    loadName?.remove();
    welcomeMsgEl.innerHTML += `
        <p id="bussinessName" class="text-xl">${loggedUser.user_metadata.businessName}</p>
        `;
    console.log(userId);
    renderDashboard();
  } else {
    window.location.href = "/login"; // ! CHANGE URL
  }
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
  localStorage.setItem("loggedUser", null);

  window.location.href = "/login"; //! change url !!!
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
    .eq("user_id", userId)
    .order("created_at", { ascending: true });

  error ? console.error(error) : console.log(data);

  categories = data;

  if (categories.length === 0) {
    loadingDashboard?.remove();
    document.querySelector(".dashboard__salesSummary")?.remove();
    dashboardEl.innerHTML += `
        <div class="dashboard__salesSummary bg-blue text-white rounded lg:px-10 px-5 py-3 mt-5 lg:mt-0 shadow-md">
            <p class="text-xl font-medium">Total Sales</p>
            <p class="text-slate-300">As of  ${date}</p>
            <p class="totalSales text-lg"><span class="text-sm">₦</span>0</p>
       </div>
        `;
  } else {
    loadingDashboard?.remove();
    document.querySelector(".dashboard__salesSummary")?.remove();
    const total = categories.reduce((a, b) => a + b.total, 0);
    dashboardEl.innerHTML += `
        <div class="dashboard__salesSummary bg-blue text-white rounded lg:px-10 px-5 py-3 mt-5 lg:mt-0 shadow-md">
            <p class="text-xl font-medium">Total Sales</p>
            <p class="text-slate-300">As of  ${date}</p>
            <p class="totalSales text-lg"><span class="text-sm">₦</span>${total.toLocaleString()}</p>
       </div>
        `;
  }

  renderCategories();
};

// ! CATEGORIES RENDERING
const renderCategories = async () => {
  if (categories.length === 0) {
    categoriesEl.innerHTML =
      '<p class="text-center text-xl self-center font-semibold text-blue mt-5">No categories found !</p>';
  } else {
    categoriesEl.innerHTML = "";

    categories.map((category) => {
      const { id, name, total } = category;
      categoriesEl.innerHTML += `
          <div class="category bg-blue text-white px-5 rounded py-4 relative shadow-md">
            <p class="category__name text-lg font-medium underline capitalize">${name}</p>
            <div class="totalCtn flex items-center gap-x-1 pt-3">
                <p>Total :</p>
                <p class="thisSales"><span class="text-sm">₦</span>${total.toLocaleString()}</p>
            </div>
            <i title="Add Record" onclick="addRecordFor('${name}', ${total})" class="bi bi-plus-lg absolute right-5 text-black bg-white rounded-full px-2 py-1 text-xl top-[30%] transition-all hover:bg-slate-200 cursor-pointer"></i>
            <i onclick="deleteCategory(${id}, '${name}')" title="Delete Category" class="bi bi-x-circle-fill absolute top-[-.5rem] text-white rounded-full px-1 bg-opacity-40 bg-black right-[-.4rem] transition-all hover:bg-opacity-60 cursor-pointer"></i>
        </div>  
          `;
    });
  }
};

// ! ADD CATEGORY MODAL OPENING AND CLOSING
const addCategoryModalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");
const addCategoryForm = document.querySelector(".addCatForm");
const addCatBtn = document.querySelector("#addCatBtn");

const openModal = () => {
  addCategoryModalEl.classList.add("fade-in");
  overlayEl.classList.add("fade-in");
  addCategoryModalEl.style.display = "block"; // make the modal visible
  overlayEl.style.display = "block"; // make the overlayEl visible
  body.classList.toggle("no-scroll");

  overlayEl.addEventListener("click", closeModal);
};

const closeModal = () => {
  setTimeout(() => {
    addCatBtn.innerHTML = `Add`;
  }, 300);
  addCategoryForm.reset();
  addCategoryModalEl.classList.add("fade-out");
  overlayEl.classList.add("fade-out");
  body.classList.toggle("no-scroll");

  setTimeout(() => {
    addCategoryModalEl.style.display = "none"; // hide the addCategoryModalEl after the animation completes
    overlayEl.style.display = "none"; // hide the overlayEl after the animation completes
    addCategoryModalEl.classList.remove("fade-out");
    overlayEl.classList.remove("fade-out");
  }, 300); // set the timeout to match the animation duration
};

// ! ADDING CATEGORY
addCategoryForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  addCatBtn.innerHTML = `
  <img class="w-14" src="/images/pulse-loading.gif">
  `;

  const categoryName = e.target.name.value.trim()
  const total = e.target.total.value || 0;

  console.log(categoryName, total);

  const { data, error } = await supabase
    .from("categories")
    .insert({
      name: categoryName,
      user_id: userId || localStorage.getItem("userId"),
      total: total,
    })
    .select("*");

  if (data) {
    closeModal();

    Toastify({
      text: `Category Added !`,
      duration: 2000,
      newWindow: false,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: false, // Prevents dismissing of toast on hover
      style: {
        background: bgColor,
        color: "#fff",
      },
    }).showToast();

    renderDashboard();
  } else {
    console.error(error);
    alert(error.message);
  }
});

// ! DELETING CATEGORY
const deleteCategory = async (id, name) => {
  const { error } = await supabase.from("categories").delete().eq("id", id);

  error && console.error(error);

  !error &&
    Toastify({
      text: `Category Deleted !`,
      duration: 2000,
      newWindow: false,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: false, // Prevents dismissing of toast on hover
      style: {
        background: bgColor,
        color: "#fff",
      },
    }).showToast();

  deleteSubCategory(name)
  renderDashboard();
};

// ! DELETING FROM SUB-CATEGORY WHEN THE CATEGORY IS DELETED
const deleteSubCategory = async (nameOfCat) => {
  const { error } = await supabase
    .from("sub-categories")
    .delete("*")
    .eq("category", nameOfCat)
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    alert(error.message);
  }
};

// ! ADDING RECORD (PART 1)
const addRecordFor = (category, total) => {
  const selectedCategoryInfo = {
    category: category,
    total: total,
  };
  localStorage.setItem(
    "selectedCategory",
    JSON.stringify(selectedCategoryInfo)
  );

  window.location.href = "/add-record"; //! change url!!!
};
