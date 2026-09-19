const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuButton?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("form-message").textContent =
    "Demo form submitted. Connect this form to email, WhatsApp or a backend before publishing.";
  event.target.reset();
  return false;
}
