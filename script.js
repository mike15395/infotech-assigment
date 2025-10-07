let mobileMenuIcon = document.querySelector(".mobile-menu-icon");
let mobileSidebar = document.querySelector(".sidebar-mobile-menu");
let mobileCloseIcon = document.querySelector(".close-icon");
let companyLogo = document.querySelector(".logo");
let overlay = document.querySelector(".overlay");
mobileMenuIcon.addEventListener("click", () => {
  mobileSidebar.style.display = "flex";
  companyLogo.style.display = "none";
  overlay.style.display = "flex";
});

mobileCloseIcon.addEventListener("click", () => {
  mobileSidebar.style.display = "none";
  companyLogo.style.display = "flex";
  overlay.style.display = "none";
});
