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
     allowTouchMove: false,  // disable drag/swipe
     autoplay: {
          delay: 2500,
          disableOnInteraction: false,
     },
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
const titleMask = document.querySelector('.title-mask-wrapper');
if (titleMask) {
     gsap.registerPlugin(ScrollTrigger);

     const split = new SplitType(".masking-title-scroll .light-text", {
          types: "chars",
          tagName: "span",
     });

     document.querySelectorAll(".masking-title-scroll .light-text span").forEach(char => {
          char.style.display = "inline";
     });
     gsap.timeline({
               scrollTrigger: {
                    trigger: titleMask,
                    start: "top 60%",
                    end: "+=400",
                    toggleActions: "play none none none",
                    scrub: true
               }
          })
          .to(".char", {
               color: "#ffffff",
               stagger: 0.1,
               duration: 0.3,
               ease: "power2.out"
          });
}


const pSwiper = new Swiper(".productSlider", {
     direction: "horizontal",
     slidesOffsetBefore: 100,
     loop: false,
     // Navigation arrows
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
     },
     scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
          draggable: true,
     },

     breakpoints: {
          0: {
               // Small screen
               slidesPerView: 1.5,
               spaceBetween: 14,
               slidesOffsetBefore: 20,
          },
          576: {
               // Small screen
               slidesPerView: 2.4,
               spaceBetween: 16,
               slidesOffsetBefore: 30,
          },
          1024: {
               slidesPerView: 2.8,
               spaceBetween: 20,
               slidesOffsetBefore: 60,
          },
          1300: {
               slidesPerView: 3.5,
               spaceBetween: 24,
          },
          1630: {
               slidesPerView: 4.5,
               spaceBetween: 24,
          },
     },
     on: {
          init: function() {
               scaleSwiperDrag();
          },
          resize: function() {
               scaleSwiperDrag();
          }
     }
});

function scaleSwiperDrag() {
     const drag = document.querySelector('.productSlider .swiper-scrollbar-drag');
     if (drag) {
          let scale = 0.5; // default
          if (window.innerWidth < 576) scale = 0.4;
          else if (window.innerWidth > 1600) scale = 0.7;

          drag.style.transformOrigin = 'left center';
          drag.style.transform = `scaleX(${scale})`;
     }
}




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

//Frontlines Posts hover effect

const frontSteps = document.querySelectorAll('.fr-step');
if (frontSteps) {
     frontSteps.forEach(function(fsteps) {
          if (window.matchMedia("(min-width: 992px)").matches) {
               fsteps.addEventListener('mouseenter', function() {
                    fsteps.closest('.frontline-steps').classList.add('fr-expand');
                    frontSteps.forEach(fstep => fstep.classList.remove('fr-expand-width'));
                    fsteps.classList.add('fr-expand-width');
               });

               fsteps.addEventListener('mouseleave', function() {
                    fsteps.closest('.frontline-steps').classList.remove('fr-expand');
                    fsteps.classList.remove('fr-expand-width');
               });
          }
          if (window.matchMedia("(max-width: 991px)").matches) {
               frontSteps[0].classList.add('fr-expand-width');
               fsteps.closest('.frontline-steps').classList.add('fr-expand');
               fsteps.addEventListener('click', function() {
                    fsteps.closest('.frontline-steps').classList.add('fr-expand');
                    frontSteps.forEach(fstep => fstep.classList.remove('fr-expand-width'));
                    fsteps.classList.add('fr-expand-width');
               });
               // document.addEventListener('click', function() {
               //      fsteps.closest('.frontline-steps').classList.remove('fr-expand');
               //      fsteps.classList.remove('fr-expand-width');
               // });
          }
     });
}