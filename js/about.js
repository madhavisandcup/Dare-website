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

document.querySelectorAll(".verticle-scroll-slider").forEach((slider) => {
     const imagePanels = slider.querySelectorAll(
          ".verticle-scroll-img .image_panel"
     );
     const contentPanels = slider.querySelectorAll(
          ".verticle-scroll-content .panel_content"
     );
     const contentWrapper = slider.querySelector(".verticle-scroll-content");

     // Set initial state for images: only first visible, rest hidden and absolutely positioned
     imagePanels.forEach((panel, i) => {
          gsap.set(panel, {
               autoAlpha: i === 0 ? 1 : 0,
               position: "absolute",
               top: 0,
               left: 0,
               width: "100%",
               height: "100%",
          });
     });

     function makeActive(index) {
          contentPanels.forEach((panel, i) => {
               panel.classList.toggle("is-active", i === index);
          });
          imagePanels.forEach((panel, i) => {
               panel.classList.toggle("is-active", i === index);
               gsap.to(panel, {
                    autoAlpha: i === index ? 1 : 0,
                    duration: 0.6,
                    overwrite: "auto",
               });
          });

          // Smooth scroll the contentWrapper to vertically center the active panel_content
          const activePanel = contentPanels[index];
          if (activePanel) {
               const wrapperHeight = contentWrapper.clientHeight;
               const panelOffsetTop = activePanel.offsetTop;
               const panelHeight = activePanel.offsetHeight;

               // Calculate scrollTop so the active panel is vertically centered
               const scrollTop = panelOffsetTop - wrapperHeight / 2 + panelHeight / 2;

               contentWrapper.scrollTo({
                    top: scrollTop,
                    behavior: "smooth",
               });
          }
     }

     makeActive(0); // initialize first active

     // Pin the entire .verticle-scroll-slider when scrolling through its content length
     ScrollTrigger.create({
          trigger: slider,
          start: "top top",
          end: () => `+=${contentPanels.length * window.innerHeight}`,
          pin: true,
          anticipatePin: 1,
          scrub: true,
     });

     // For each content panel, create a ScrollTrigger that activates makeActive on entering viewport center
     contentPanels.forEach((panel, i) => {
          ScrollTrigger.create({
               trigger: panel,
               start: "top center",
               end: "bottom center",
               onEnter: () => makeActive(i),
               onEnterBack: () => makeActive(i),
          });
     });
});

/************************** Timeline slider - GSAP *******************************/
if (document.querySelector(".timeline-scroll") != null) {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();
  const pinnedImageWrappers = document.querySelectorAll(".timeline-scroll");

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
