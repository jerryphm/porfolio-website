const navItems = document.querySelectorAll("header nav .nav-item");
const navOpenBtn = document.querySelector("header nav .nav-open");
const navCloseBtn = document.querySelector("header nav .nav-close");
const navMenu = document.querySelector("header nav .nav-menu");

const toggleActive = (item) => {
  document
    .querySelector("header nav .nav-item.active")
    .classList.remove("active");
  item.classList.add("active");
};

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    toggleActive(item);
    navCloseBtn.classList.remove("active");
    navOpenBtn.classList.add("active");
    // setTimeout(() => {
      navMenu.classList.remove("active");
    // }, 250);
  });
});

navOpenBtn.addEventListener("click", () => {
  navOpenBtn.classList.remove("active");
  navCloseBtn.classList.add("active");
  navMenu.classList.add("active");
});

navCloseBtn.addEventListener("click", () => {
  navCloseBtn.classList.remove("active");
  navOpenBtn.classList.add("active");
  navMenu.classList.remove("active");
});
