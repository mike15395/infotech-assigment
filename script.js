let mobileMenuIcon = document.querySelector(".mobile-menu-icon");
let mobileSidebar = document.querySelector(".sidebar-mobile-menu");
let mobileCloseIcon = document.querySelector(".close-icon");
let companyLogo = document.querySelector(".logo");
mobileMenuIcon.addEventListener("click", () => {
  mobileSidebar.style.display = "flex";
  companyLogo.style.display = "none";
});

mobileCloseIcon.addEventListener("click", () => {
  mobileSidebar.style.display = "none";
  companyLogo.style.display = "flex";
});
