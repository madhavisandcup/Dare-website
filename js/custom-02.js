//Vision content reveal on scroll
gsap.registerPlugin(ScrollTrigger);
const visionMain = document.querySelector(".vision-wrapper.vision-main");
if (visionMain) {
     const growTl = gsap.timeline({
          scrollTrigger: {
               trigger: ".vision-main",
               scrub: false,
               start: "top 80%",
               end: "+=400",
               toggleActions: "play none none none",
          },
     });

     growTl.to(".v-reveal", {
          duration: 1,
          ease: "power1.inOut",
          opacity: 1,
          y: 0
     });
}

//Principles slider
const principlesSlider = new Swiper(".principles-slider", {
     loop: true,
     centeredSlides: true,
     spaceBetween: 150,
     slidesPerView: 3,
     speed: 1000,
     effect: 'slide',
     // autoplay: {
     //      delay: 2500,
     //      disableOnInteraction: false,
     // },
     breakpoints: {
          0: {
               // Small screen
               slidesPerView: 1,
               spaceBetween: 16,
               slidesOffsetBefore: 0,
          },
          650: {
               // Small screen
               slidesPerView: 2,
               spaceBetween: 16,
               slidesOffsetBefore: 30,
          },
          1024: {
               // Small screen
               slidesPerView: 3,
          }

     },
});

//Masking Text on scroll
gsap.registerPlugin(ScrollTrigger);

// const split = new SplitType(".light-text", { types: "chars" });

// Confirm split works (debug)
// Split text into characters
const split = new SplitType(".light-text", { types: "chars" });
const chars = document.querySelectorAll(".light-text .char");

// Create a timeline for sequential animation
const tl = gsap.timeline({
     scrollTrigger: {
          trigger: ".title-mask-wrapper",
          start: "top 50%",
          end: "+=600",
          scrub: true,
          toggleActions: "play none none none",
          // markers: true,
     }
});

// Add each character to the timeline sequentially
chars.forEach((char, i) => {
     tl.to(char, {
          color: "#ffffff",
          duration: 0.03,
          ease: "power1.inOut"
     }, "+=0.01"); // small delay between each
});



// Get all .js-pinned-images

// gsap.registerPlugin(ScrollTrigger);
// window.addEventListener("DOMContentLoaded", () => {
//      const wrapper = document.querySelector(".features-verticle-slider");
//      const inner = wrapper.querySelector(".features-verticle-inner");
//      const items = gsap.utils.toArray(".feature-item", inner);
//      const totalHeight = inner.scrollHeight;

//      gsap.to(inner, {
//           yPercent: -100 * (items.length - 1),
//           ease: "none",
//           scrollTrigger: {
//                trigger: wrapper,
//                start: "top top",
//                end: () => `+=${inner.scrollHeight - wrapper.offsetHeight}`,
//                scrub: true,
//                pin: true,
//                anticipatePin: 1,
//           },
//      });
// });


const slides = document.querySelectorAll('.feature-item');
const nav = document.querySelector('.fi-navigation');
const navDots = document.querySelectorAll('.fi-line');
const sliderSection = document.querySelector('.features-verticle-slider');

// Scroll to section on dot click
navDots.forEach(dot => {
     dot.addEventListener('click', () => {
          const targetIndex = parseInt(dot.dataset.index);
          if (slides[targetIndex]) {
               slides[targetIndex].scrollIntoView({ behavior: 'smooth' });
          }
     });
});

// Active nav dot (based on current center view)
function updateActiveDot() {
     let index = 0;
     slides.forEach((slide, i) => {
          const rect = slide.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
               index = i;
          }
     });

     navDots.forEach(dot => dot.classList.remove('is-active'));
     if (navDots[index]) {
          navDots[index].classList.add('is-active');
     }
}

// Intersection Observer: make slide active when in view
const slideObserver = new IntersectionObserver(
     entries => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    const fTime = entry.target.querySelector('.features-timeline-main');
                    if (fTime && !fTime.classList.contains('active-tl')) {
                         setTimeout(() => {
                              fTime.classList.add('active-tl');
                         }, 500);
                    }
                    if (fTime && !fTime.classList.contains('progress-fill')) {
                         setTimeout(() => {
                              fTime.classList.add('progress-fill');
                         }, 1500);
                    }
               }
          });
     }, {
          threshold: 1, // Adjust this if needed
     }
);

slides.forEach(slide => slideObserver.observe(slide));

// Intersection Observer: show nav when section is in view
const navObserver = new IntersectionObserver(
     entries => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    nav.classList.add('visible');
               } else {
                    nav.classList.remove('visible');
               }
          });
     }, {
          threshold: 0.1,
     }
);

navObserver.observe(sliderSection);

window.addEventListener('scroll', updateActiveDot);
window.addEventListener('load', updateActiveDot);

// Work feed Slider

const workFeed = new Swiper(".workFeeds", {
     direction: "horizontal",
     loop: false,
     // Navigation arrows
     navigation: {
          nextEl: '.swiper-button-next.s2',
          prevEl: '.swiper-button-prev.s2',
     },

     breakpoints: {
          0: {
               // Small screen
               slidesPerView: 1,
          },
          576: {
               slidesPerView: 1.2,
               spaceBetween: 16,

          },
          768: {
               slidesPerView: 2,
               spaceBetween: 24,
          },
          1480: {
               slidesPerView: 3,
               spaceBetween: 50,
          },
     },
});