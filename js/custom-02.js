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
               centeredSlides: false,
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

// STEP 1: Split text into words & characters
const split = new SplitType(".masking-title-scroll .light-text", {
     types: "chars",
     tagName: "span",
});

// STEP 2: Fix display so text wraps by word
// document.querySelectorAll(".word").forEach(word => {
//      word.style.display = "inline";
// });
document.querySelectorAll(".char").forEach(char => {
     char.style.display = "inline";
});

// STEP 3: Scroll-triggered animation
gsap.timeline({
          scrollTrigger: {
               trigger: ".title-mask-wrapper",
               start: "top 60%", // when the section hits 60% from top of screen
               end: "+=400", // controls scroll range
               toggleActions: "play none none none",
               scrub: true // smoother on/off instead of scroll-linked
          }
     })
     .to(".char", {
          color: "#ffffff",
          stagger: 0.1, // slow the animation (higher = slower)
          duration: 0.3,
          ease: "power2.out"
     });




// Get all .js-pinned-images

// gsap.registerPlugin(ScrollTrigger);
// window.addEventListener("DOMContentLoaded", () => {
//      const wrapper = document.querySelector(".features-verticle-slider");
//      const inner = wrapper.querySelector(".features-verticle-inner");
//      const items = gsap.utils.toArray(".feature-item", inner);
//      const totalHeight = inner.scrollHeight;


const slides = document.querySelectorAll('.feature-item');
const nav = document.querySelector('.fi-navigation');
const navDots = document.querySelectorAll('.fi-line');
const sliderSection = document.querySelector('.features-verticle-slider');
const lastSlide = slides[slides.length - 1];
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
function createObserver() {
     const thresholdValue = window.innerWidth <= 767 ? 0.5 : 1;
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
               threshold: thresholdValue, // Adjust this if needed
          }
     );

     slides.forEach(slide => slideObserver.observe(slide));
}

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
          threshold: 0.15,
     }
);

navObserver.observe(sliderSection);

window.addEventListener('scroll', updateActiveDot);
window.addEventListener('load', () => {
     updateActiveDot();
     createObserver();
});


// Optional: Re-evaluate on window resize (only if screen size might change e.g. rotate)
window.addEventListener('resize', () => {
     createObserver();
});

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