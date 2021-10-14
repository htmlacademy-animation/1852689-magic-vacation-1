// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';

window.addEventListener(`DOMContentLoaded`, () => {
  document.querySelector(`body`).classList.add(`load`);
  document.querySelector(`.js-menu > ul`).children[0].querySelector(`.js-menu-link`).classList.remove(`active`);
  setTimeout(() => {
    document.querySelector(`.js-menu > ul`).children[0].querySelector(`.js-menu-link`).classList.add(`active`);
  }, 250);
});

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
