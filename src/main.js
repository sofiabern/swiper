// import Swiper JS
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';

// const swiperEl = document.querySelector('.swiper')

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  direction: 'horizontal',
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  mousewheel: {
    enabled: true,
    invert: true,
  },
  // не працює


  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
},
//   не працює

});

// // Змінна для збереження поточного стану видимості слайдера
// let isSwiperInViewport = false;

// // Створіть IntersectionObserver
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     // Перевірте, чи слайдер видимий у вікні перегляду
//     isSwiperInViewport = entry.isIntersecting;
//   });
// });

// // Спостерігайте за елементом слайдера
// observer.observe(swiperEl);


// document.addEventListener('keydown', (event) => {
//   // Перевірте, чи натиснута клавіша зі стрілкою вліво або вправо
//   // і чи слайдер є у вікні перегляду
//   if (isSwiperInViewport) {
//     // console.log('куку')
//     if (event.key === 'ArrowLeft') {
//       // Перемістіть слайдер вліво
//      swiper.slidePrev();
//     } else if (event.key === 'ArrowRight') {
//       // Перемістіть слайдер вправо
//       swiper.slideNext();
//     }
//   }
// });
