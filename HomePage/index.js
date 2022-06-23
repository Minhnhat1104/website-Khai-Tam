// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// slider
const sliderImgs = $$(".slider-img__item");
const indexItems = $$(".index__item");
const sliderLeftArrow = $(".slider .arrow-left__icon");
const sliderRightArrow = $(".slider .arrow-right__icon");

let slideHandler = setInterval(() => {
  let index = Array.from(sliderImgs).findIndex((item) =>
    item.classList.contains("active")
  );
  sliderImgs[index].classList.remove("active");
  indexItems[index].classList.remove("active");

  if (index === 2) {
    index = 0;
  } else {
    index++;
  }

  sliderImgs[index].classList.add("active");
  indexItems[index].classList.add("active");
}, 5000);

function resetSlideHandler() {
  clearInterval(slideHandler);
  slideHandler = setInterval(() => {
    let index = Array.from(sliderImgs).findIndex((item) =>
      item.classList.contains("active")
    );
    sliderImgs[index].classList.remove("active");
    indexItems[index].classList.remove("active");

    if (index === 2) {
      index = 0;
    } else {
      index++;
    }

    sliderImgs[index].classList.add("active");
    indexItems[index].classList.add("active");
  }, 5000);
}

Array.from(indexItems).forEach((item, index) => {
  item.onclick = function () {
    $(".slider-img__item.active").classList.remove("active");
    $(".index__item.active").classList.remove("active");
    sliderImgs[index].classList.add("active");
    indexItems[index].classList.add("active");
    resetSlideHandler();
  };
});

sliderLeftArrow.onclick = () => {
  let index = Array.from(sliderImgs).findIndex((item) =>
    item.classList.contains("active")
  );
  sliderImgs[index].classList.remove("active");
  indexItems[index].classList.remove("active");

  if (index === 0) {
    index = 2;
  } else {
    index--;
  }

  sliderImgs[index].classList.add("active");
  indexItems[index].classList.add("active");
  resetSlideHandler();
};

sliderRightArrow.onclick = () => {
  let index = Array.from(sliderImgs).findIndex((item) =>
    item.classList.contains("active")
  );
  sliderImgs[index].classList.remove("active");
  indexItems[index].classList.remove("active");

  if (index === 2) {
    index = 0;
  } else {
    index++;
  }

  sliderImgs[index].classList.add("active");
  indexItems[index].classList.add("active");
  resetSlideHandler();
};

const logoSlider = $(".desti_logo__list");

// desti Slider

const handleLogoSlider = setInterval(() => {
  if (logoSlider.offsetWidth - logoSlider.scrollLeft >= 5) {
    logoSlider.scrollLeft += 1;
  } else clearInterval(handleLogoSlider);
}, 10);
