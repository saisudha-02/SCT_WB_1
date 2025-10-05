// Navbar scroll effect + dynamic logo color
const navbar = document.getElementById("navbar");
const logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    logo.style.color = "#6c3ae0"; // purple on white background
  } else {
    navbar.classList.remove("scrolled");
    logo.style.color = "#ffffff"; // white on purple background
  }
});