import { slider } from './slider.js';
import { renderCards } from './card.js';
import { openModalWindow } from './modalWindow.js';
import { closeModalWindow } from './modalWindow.js';
import { overlayModal } from './modalWindow.js';
import { startCounterAnimation } from './incrementingCounter.js';
// import {stickyNav} from './js/stickyNav';
// import {api} from './js/api';


slider();
renderCards();
openModalWindow();
closeModalWindow();
overlayModal();
startCounterAnimation();



// const counters = document.querySelectorAll('.incrementing__counter-number');

// const options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.1 
// };

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.innerText = '0';
//       updateCounter(entry.target);
//       observer.unobserve(entry.target);
//     }
//   });
// }, options);

// counters.forEach(counter => {
//   observer.observe(counter);
// });

// function updateCounter(counter) {
//   const target = +counter.getAttribute('data-target');
//   const c = +counter.innerText;
//   const increment = target / 600;
//   if (c < target) {
//     counter.innerText = `${Math.ceil(c + increment)}`;
//     setTimeout(() => updateCounter(counter), 1);
//   } else {
//     counter.innerText = target;
//   }
// }
