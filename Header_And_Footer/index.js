const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navItemMobile = $$(".nav__item--mobile");

Array.from(navItemMobile).forEach(
  (item) =>
    (item.onclick = () => {
      item.classList.toggle("active");
    })
);

$(".navbar__modal").onclick = () => {
  $("#nav__input").checked = false;
};

$(".navClose--mobile").onclick = () => {
  $("#nav__input").checked = false;
};
