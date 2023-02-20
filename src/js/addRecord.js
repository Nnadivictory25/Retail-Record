const SUPABASE_URL = "https://plxvbnykwsgwglpxusar.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseHZibnlrd3Nnd2dscHh1c2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5Nzk5OTYsImV4cCI6MTk5MTU1NTk5Nn0.4e6f--5uvLzay-Xduh0OIRF3fFK3AGHqdsAqMV6vUC0";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let userId;
const bgColor = `hsl(216, 93%, 44%)`; // for toastify
const userInitials = localStorage.getItem("userInitials");
const profilePic = document.querySelector("#profilePic");
const body = document.querySelector("body");
const navToggler = document.querySelector("#navToggler");
const nav = document.querySelector(".nav");
let navActive = false;
let FROM_EDIT = false;
let editedId;
profilePic.textContent = userInitials;

// ! GETTING USER
(async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    console.log(user);
    document.querySelector("#profilePic").textContent =
      user.user_metadata.businessName[0];
    userId = user.id;
    renderRecordTable();
  } else {
    window.location.href = "/login"; // ! CHANGE URL
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

const selectedCategory = JSON.parse(localStorage.getItem("selectedCategory"));
const selectedCategoryEl = document.querySelector("#selectedRecordEl");
const totalEl = document.querySelector("#catTotal");

const recordsTable = document.querySelector(".records");
const errMsgEl = document.querySelector(".errMsg");
let records = [];

// ! SEMI ROUTE PROTECTION
if (selectedCategory) {
  selectedCategoryEl.innerHTML = `
  Manage record for <span class="text-blue font-bold capitalize">${selectedCategory?.category}</span>
  `;
  totalEl.textContent = `Total : ₦${selectedCategory?.total.toLocaleString()}`;
} else {
  body.innerHTML =
    '<p class="font-bold text-3xl text-center text-red-600 mt-20"> 404 , PAGE NOT FOUND !!</p>';
}

// ! RENDER TABLE
const renderRecordTable = async (cleared = false, fromEdit = false) => {
  const { data, error } = await supabase
    .from("sub-categories")
    .select("*")
    .eq("user_id", userId)
    .eq("category", selectedCategory?.category)
    .order("created_at", { ascending: true });

  if (error) {
    console.log(error);
    alert(error.message);
  }

  records = data;

  // console.log(records);

  if (records.length === 0) {
    recordsTable.innerHTML = "";
    errMsgEl.innerHTML = `
    <p class="font-bold text-xl text-center text-blue mt-5"> No records for ${selectedCategory.category} yet</p>
    `;
  } else {
    errMsgEl.innerHTML = "";
    recordsTable.innerHTML = `
      <div class="header font-bold pb-2">
        <p class="text-lg">S/N</p>
        <p class="text-lg">Amount</p>
        <p class="text-lg">Action</p>
      </div>
     <hr class="h-2">
    `;
    records.map((record, i) => {
      const { id, amount } = record;

      recordsTable.innerHTML += /* html */ `
      <div class="data pt-2">
        <p class="text-lg">${i + 1}</p>
        <p class="text-lg text-green-600 font-medium">+${amount}</p>
        <div class="flex items-center gap-x-3 mx-auto">
          <i title="Edit Record" onclick="editRecord(${id}, ${amount})" class="bi bi-pencil-square text-lg cursor-pointer transition-all hover:opacity-70 "></i>
          <i title="Delete Record" onclick="deleteRecord(${id})" class="bi bi-trash3 text-red-600 text-lg cursor-pointer transition-all hover:opacity-70 "></i>
        </div>
      </div>
      `;
    });
  }

  calcAndUpdateTotal();
};

// ! ADD RECORD MODAL OPENING AND CLOSING
const addRecModalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");
const addRecForm = document.querySelector(".addRecForm");
const addRecBtn = document.querySelector("#addRecordBtn");
const openModalBtn = document.querySelector("#createRecordBtn");

openModalBtn.addEventListener("click", () => {
  openModal();
});
const openModal = (fromEdit = false) => {
  const modalHeader = document.querySelector("#modalHeader");
  !fromEdit && (modalHeader.textContent = "Add new record");
  fromEdit && (FROM_EDIT = true);
  addRecModalEl.classList.add("fade-in");
  overlayEl.classList.add("fade-in");
  addRecModalEl.style.display = "block"; // make the modal visible
  overlayEl.style.display = "block"; // make the overlayEl visible
  body.classList.toggle("no-scroll");

  overlayEl.addEventListener("click", closeModal);
};

const closeModal = () => {
  setTimeout(() => {
    addRecBtn.innerHTML = `Add`;
  }, 300);
  FROM_EDIT = false;
  addRecForm.reset();
  addRecModalEl.classList.add("fade-out");
  overlayEl.classList.add("fade-out");
  body.classList.toggle("no-scroll");

  setTimeout(() => {
    addRecModalEl.style.display = "none"; // hide the addRecModalEl after the animation completes
    overlayEl.style.display = "none"; // hide the overlayEl after the animation completes
    addRecModalEl.classList.remove("fade-out");
    overlayEl.classList.remove("fade-out");
  }, 300); // set the timeout to match the animation duration
};

// ! ADDING RECORD
addRecForm.addEventListener("submit", async (e, fromEdit = FROM_EDIT) => {
  e.preventDefault();
  addRecBtn.innerHTML = `
  <img class="w-14" src="/images/pulse-loading.gif">
  `;

  const amount = e.target.amount.value || 0;

  if (!fromEdit) {
    const { data, error } = await supabase
      .from("sub-categories")
      .insert({
        category: selectedCategory.category,
        amount: amount,
        user_id: userId || localStorage.getItem("userId"),
      })
      .select("*");

    if (data) {
      Toastify({
        text: `Record Added !`,
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

      closeModal();
      renderRecordTable(false);
    } else {
      console.error(error);
      alert(error.message);
    }
  } else {
    const { error } = await supabase
      .from("sub-categories")
      .update({ amount: amount })
      .eq("id", editedId);

    if (!error) {
      Toastify({
        text: `Record Updated !`,
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

      closeModal();
      renderRecordTable(false, true);
    } else {
      console.error(error);
      alert(error.message);
    }
  }
});

const calcAndUpdateTotal = async () => {
  const total = records.reduce((a, b) => a + b.amount, 0);
  totalEl.textContent = `Total : ₦${total.toLocaleString()}`;

  const { error } = await supabase
    .from("categories")
    .update({ total: total })
    .eq("name", selectedCategory?.category);

  error && alert(error.message);

  const selectedCategoryInfo = {
    category: selectedCategory?.category,
    total: total,
  };
  localStorage.setItem(
    "selectedCategory",
    JSON.stringify(selectedCategoryInfo)
  );
};

// ! CLEARING ALL RECORDS
const clearAllRecords = async () => {
  if (records.length > 0) {
    records = [];

    const { error } = await supabase
      .from("sub-categories")
      .delete("*")
      .eq("user_id", userId)
      .eq("category", selectedCategory.category);

    error && alert(error.message);

    renderRecordTable(true);

    Toastify({
      text: ` All Record Deleted !`,
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
  } else {
    Toastify({
      text: `No records to clear!`,
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
  }
};

// ! EDITING AND DELETING RECORDS
const editRecord = async (id, amount) => {
  editedId = id;
  const modalHeader = document.querySelector("#modalHeader");
  const input = document.querySelector('input[name="amount"]');

  modalHeader.textContent = "Edit record";
  input.value = amount;
  openModal(true);
};


const deleteRecord = async (id) => {
  const { error } = await supabase
  .from("sub-categories")
  .delete("*")
  .eq("id", id)
  .eq("user_id", userId)
  
  if (error) {
    console.log(error);
    alert(error.message);
  }

  Toastify({
    text: `Record Deleted!`,
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

  renderRecordTable()
}