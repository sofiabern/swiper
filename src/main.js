// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel  } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';

// const swiperEl = document.querySelector('.swiper')

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Keyboard, Mousewheel],
  direction: 'horizontal',
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  


mousewheel: {
  invert: true,
},

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
},

});