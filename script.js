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

/* Header shrink + shadow on scroll */
const header = document.getElementById("siteHeader");
const onScroll = () => {
  if (window.scrollY > 12) header?.classList.add("scrolled");
  else header?.classList.remove("scrolled");
};
document.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* Scroll-reveal animation for elements marked .reveal */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add("in-view"));
}
