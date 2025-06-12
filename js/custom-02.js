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


//add class on click
const hireSteps = document.querySelectorAll('.h-step');
if (hireSteps) {
     hireSteps.forEach((hstep) => {
          hstep.addEventListener('click', () => {
               hireSteps.forEach(step => step.classList.remove('s-active'));
               hstep.classList.add('s-active');
          });
     });
}