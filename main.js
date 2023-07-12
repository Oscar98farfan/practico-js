const menuEmail = document.querySelector(".navbar-email");;
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamIcon = document.querySelector(".menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive"); // con esta linea se quita o pone una clase desde js
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
}