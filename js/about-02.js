// gsap.registerPlugin(ScrollTrigger);

// // Main pinning and scroll animation
// document.querySelectorAll(".verticle-layout-wrap").forEach((slider) => {
//   const parent = slider.closest(".verticle-scroll-slider");
//   const imageWrapper = slider.querySelector(".verticle-scroll-img");
//   const contentWrapper = slider.querySelector(".verticle-scroll-content");
//   const contents = slider.querySelectorAll(".panel_content");
//   const images = slider.querySelectorAll(".image_panel");

//   // Set image initial state
//   images.forEach((img, i) => {
//     gsap.set(img, {
//       autoAlpha: i === 0 ? 1 : 0,
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%"
//     });
//   });

//   // 🔄 Active class & fade control
//   function makeItemActive(index) {
//     contents.forEach(el => el.classList.remove("is-active"));
//     images.forEach(el => el.classList.remove("is-active"));

//     contents[index].classList.add("is-active");
//     images[index].classList.add("is-active");

//     // Fade logic
//     images.forEach((img, i) => {
//       gsap.to(img, {
//         autoAlpha: i === index ? 1 : 0,
//         duration: 0.5,
//         overwrite: "auto"
//       });
//     });
//   }

//   makeItemActive(0); // Initialize first active

//   // 🔒 Pin parent
//   ScrollTrigger.create({
//     trigger: parent,
//     start: "top top",
//     end: () => `+=${contentWrapper.scrollHeight}`,
//     pin: true,
//     anticipatePin: 1
//   });

//   // 🔄 Scroll-based switching
//   contents.forEach((content, i) => {
//     ScrollTrigger.create({
//       trigger: content,
//       start: "top center",
//       end: "bottom center",
//       onEnter: () => makeItemActive(i),
//       onEnterBack: () => makeItemActive(i)
//     });
//   });
// });

gsap.registerPlugin(ScrollTrigger);

const slider = document.querySelector(".verticle-scroll-slider");
const panels = gsap.utils.toArray(".panel_content");
const title = slider.querySelector(".panel_title");

// Calculate total height to scroll
const totalScrollHeight = panels.length * (168 + 160); // panel height + margin

// 1. Scroll the content upward during pinning
gsap.to(".verticle-scroll-content", {
     y: () => -(totalScrollHeight - window.innerHeight), // scroll up to reveal all panels
     ease: "none",
     scrollTrigger: {
          trigger: ".verticle-scroll-slider",
          start: "top top",
          end: () => `+=${totalScrollHeight}`, // total scroll distance
          scrub: true,
          pin: true,
     }
});

// 2. Track when each panel reaches the center of the viewport
panels.forEach((panel) => {
     ScrollTrigger.create({
          trigger: panel,
          start: "center center",
          end: "bottom center",
          onEnter: () => {
               panels.forEach(p => p.classList.remove("is-active"));
               panel.classList.add("is-active");
          },
          onEnterBack: () => {
               panels.forEach(p => p.classList.remove("is-active"));
               panel.classList.add("is-active");
          }
     });
});







/************************** Timeline slider - GSAP *******************************/
gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();
const pinnedImageWrappers = document.querySelectorAll(".timeline-scroll");
if (pinnedImageWrappers) {
     // Init timeline + ScrollTrigger
     pinnedImageWrappers.forEach((cWrapper) => {
          const inner = cWrapper.querySelector(".timeline-inner-content");
          let cItemP = document.querySelector(".tm-slide.scroll-only");

          let tl = gsap.timeline({
               ease: "none",
               scrollTrigger: {
                    trigger: cWrapper,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    end: () => `+=${cItemP.offsetHeight}`,
               },
          });

          tl.to(".tm-slide.white-bg", {
               yPercent: "-=100",
               ease: "power1.out",
          });
     });
     // Slick slider //
     $(".slickSlider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          vertical: true,
          verticalSwiping: true,
          infinite: false,
     });
}

/************************** Text marquee semicircle - GSAP *******************************/