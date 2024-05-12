const navItems = document.querySelectorAll("header nav .nav-item");

const toggleActive = (item) => {
  document
    .querySelector("header nav .nav-item.active")
    .classList.remove("active");
  item.classList.add("active");
};

navItems.forEach((item) => {
  item.addEventListener("click", () => toggleActive(item));
});
