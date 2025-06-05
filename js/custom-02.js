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