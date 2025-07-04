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

const vSlider = document.querySelector(".verticle-scroll-slider");
const contents = gsap.utils.toArray(".panel_content");
const images = gsap.utils.toArray(".image_panel");
const totalPanels = contents.length;
const panelHeight = 244;
const panelMargin = 160;
const contentHeight = totalPanels * (panelHeight + panelMargin);
const extraBuffer = window.innerHeight; // extra scroll after last panel

if (vSlider) {
     // Main timeline
     const tl = gsap.timeline({
          scrollTrigger: {
               trigger: vSlider,
               start: "top top",
               end: () => `+=${contentHeight + extraBuffer}`,
               scrub: true,
               pin: true,
               anticipatePin: 1,
               onUpdate: () => {
                    const center = window.innerHeight / 2;

                    let activeIndex = -1;

                    contents.forEach((el, i) => {
                         const box = el.getBoundingClientRect();
                         const itemCenter = box.top + box.height / 2;

                         if (itemCenter < center + 84) {
                              activeIndex = i; // 84 = half of 168 (panel height)
                         }
                    });

                    contents.forEach((el, i) => {
                         const isActive = i === activeIndex;
                         el.classList.toggle("is-active", isActive);
                         images[i].classList.toggle("is-active", isActive);
                    });

                    // Toggle default image visibility
                    const anyImageActive = images.some(img => img.classList.contains("is-active"));
                    document.querySelector(".default_panel").classList.toggle("hidden", anyImageActive);
               },
          },
     });

     // Smoothly move and fade out panel_title as scroll starts
     tl.to(".panel_title", {
          y: -180,
          autoAlpha: 0,
          ease: "none",
          duration: 0.15,
     }, 0);

     // Then move the whole content upward to scroll through panels
     tl.to(".verticle-scroll-content", {
          y: -contentHeight,
          ease: "none",
          duration: 0.8,
     }, 0);
}


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