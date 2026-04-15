//your JS code here. If required.
const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-modal");

// open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "block"; // MUST be block
});


// close via button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
