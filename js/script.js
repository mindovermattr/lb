const menuIcon = document.querySelector(".list__item--menu");
const menu = document.querySelector(".menu");
const menuCloseButton = document.querySelector(".menu__button");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
});

menuCloseButton.addEventListener("click", () => {
  menu.classList.remove("menu--active");
});
