const swiper = new Swiper(".swiper", {
  slidesPerView: 5,
  spaceBetween: 28,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const headerMenuOpen = document.querySelector(".header-menu");
const navButton = document.querySelector(".nav-button");
const navBtnImg = document.querySelector(".nav-btn-img");
navButton.onclick = () => {
  if (headerMenuOpen.classList.toggle("open")) {
    navBtnImg.src = "./images/nav-close.svg";
  } else {
    navBtnImg.src = "./images/nav-open.svg";
  }
};
