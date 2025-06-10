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
               slidesPerView: 1,
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

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
     const wrapper = document.querySelector('.features-verticle-slider');
     if (!wrapper) return; // Exit if wrapper is not found
     const inner = wrapper.querySelector('.features-verticle-inner');
     const sections = gsap.utils.toArray('.feature-item', inner);

     gsap.to(inner, {
          yPercent: -100 * (sections.length - 1),
          ease: 'none',
          scrollTrigger: {
               trigger: wrapper,
               start: 'top top',
               end: () => `+=${window.innerHeight * (sections.length - 1)}`,
               scrub: 1,
               pin: true,
               anticipatePin: 1,
               invalidateOnRefresh: true,
          }
     });
});