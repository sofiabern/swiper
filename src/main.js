// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';


const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // on: {
  //   reachEnd: function() {
  //     document.querySelector(".swiper-button-next").disabled = true;
  //   },
  //   reachBeginning: function() {
  //     document.querySelector(".swiper-button-prev").disabled = true;
  //   },
  // },
});