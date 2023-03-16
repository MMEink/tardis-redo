//hide landing animation after 5 seconds
const landingpage = document.querySelector(".landingpage");
setTimeout(() => {
  landingpage.classList.add("hide");
}, "3000");

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  speed: 4000,
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 1,
  centeredSlidesBounds: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  //Autoplay on
  autoplay: {
    delay: 4000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
