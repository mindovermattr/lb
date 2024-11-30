import { renderer as catalogRenderer } from "./renderer.mjs";

const menuIcon = document.querySelector(".list__item--menu");
const menu = document.querySelector(".menu");
const menuCloseButton = document.querySelector(".menu__button");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
});

menuCloseButton.addEventListener("click", () => {
  menu.classList.remove("menu--active");
});

catalogRenderer.fetchProducts();
const catalogTemplate = catalogRenderer.render();

const features = document.querySelector(".features__cards--catalog");

if (features) features.innerHTML = catalogTemplate;
