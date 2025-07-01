// clears all keys
if ("caches" in window) {
     caches.keys().then(function (names) {
          for (let name of names) {
               caches.delete(name);
          }
          console.log("cache cleared!");
     });
}

/************************** Verticle slider - GSAP *******************************/
gsap.registerPlugin(ScrollTrigger);

const verticleScroll = document.querySelector(".verticle-scroll-slider");
const contents = gsap.utils.toArray(".panel_content");
const images = gsap.utils.toArray(".image_panel");
const totalPanels = contents.length;

// ✅ Set panelHeight and panelMargin based on screen width
let panelHeight;
let panelMargin;
if (window.innerWidth <= 575) {
     // SM Mobile
     panelHeight = 150;
     panelMargin = 106;
} else if (window.innerWidth <= 768) {
     // Mobile
     panelHeight = 140;
     panelMargin = 80;
} else if (window.innerWidth <= 1024) {
     // Tablet
     panelHeight = 180;
     panelMargin = 120;
} else if (window.innerWidth <= 1600) {
     panelHeight = 195;
     panelMargin = 124;
}
else {
     // Desktop
     panelHeight = 244;
     panelMargin = 160;
}

const contentHeight = totalPanels * (panelHeight + panelMargin);
const extraBuffer = window.innerHeight; // extra scroll after last panel

if (verticleScroll) {
     // Main timeline
     const tl = gsap.timeline({
          scrollTrigger: {
               trigger: verticleScroll,
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
                    const anyImageActive = images.some((img) =>
                         img.classList.contains("is-active")
                    );
                    document
                         .querySelector(".default_panel")
                         .classList.toggle("hidden", anyImageActive);
               },
          },
     });

     // Smoothly move and fade out panel_title as scroll starts
     tl.to(
          ".panel_title",
          {
               y: -400,
               autoAlpha: 0,
               ease: "none",
               duration: 0.15,
          },
          0
     );

     // Then move the whole content upward to scroll through panels
     tl.to(
          ".verticle-scroll-content",
          {
               y: -contentHeight,
               ease: "none",
               duration: 0.8,
          },
          0
     );
}

/************************** Timeline slider - GSAP *******************************/
document.addEventListener("DOMContentLoaded", function () {
     const TimelineScript = document.querySelector(".timeline-scroll") 
     if (TimelineScript) {
          gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
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
                         start: "top-=100 top",
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
          // ✅ Scroll to #slickslider on .jouney-btn click
          const journeyBtn = document.querySelector(".jouney-btn");
          if (journeyBtn) {
               journeyBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    gsap.to(window, {
                         // duration: 1,
                         scrollTo: {
                              y: "#slickslider",
                              offsetY: 50, // adjust as needed
                         },
                         ease: "power2.out",
                    });
               });
          }

          // ✅ Scroll back to .scroll-only when scrolling up
          ScrollTrigger.create({
               trigger: "#slickslider",
               start: "top top",
               onLeaveBack: () => {
                    gsap.to(".tm-slide.white-bg", {
                         yPercent: 0,
                         duration: 0.6,
                         ease: "power2.out",
                         onComplete: () => {
                              gsap.to(window, {
                                   duration: 1,
                                   scrollTo: {
                                        y: ".tm-slide.scroll-only",
                                        offsetY: 50,
                                   },
                                   ease: "power2.inOut"
                              });
                         }
                    });
               }
          });

          // Slick slider //
          $(document).ready(function () {
               const isMobile = window.innerWidth <= 768;
               const sliderClass = isMobile ? '.mobile-layout' : '.desktop-layout';

               $(".slickSlider").slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                    infinite: false,
                    speed: 500,
                    autoplay: false,
                    adaptiveHeight: true,
                    // Default (desktop) settings
                    vertical: true,
                    verticalSwiping: true,
                    cssEase: 'ease',

                    responsive: [
                         {
                              breakpoint: 769, // applies to screen widths <= 768
                              settings: {
                                   vertical: false,
                                   verticalSwiping: false,
                                   fade: true,
                                   speed: 600,  
                                   cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)'
                              }
                         }
                    ]

               });
          });

          // // 🚀 Scroll to slickslider on button click
          // document.querySelector(".jouney-btn")?.addEventListener("click", function (e) {
          //      e.preventDefault();
          //      const target = document.querySelector("#slickslider");
          //      if (target) {
          //           target.scrollIntoView({ behavior: "smooth", block: "start" });
          //      }
          // });

          // // 🔁 Scroll back to scroll-only on scroll up
          // ScrollTrigger.create({
          //      trigger: "#slickslider",
          //      start: "top top",
          //      onLeaveBack: () => {
          //           gsap.set(".tm-slide.white-bg", { yPercent: 0 });

          //           // Scroll back to scroll-only
          //           const backTarget = document.querySelector(".tm-slide.scroll-only");
          //           if (backTarget) {
          //                backTarget.scrollIntoView({ behavior: "smooth", block: "start" });
          //           }
          //      }
          // });
     }
});

/************************** Text marquee semicircle - GSAP *******************************/
// // Add a class
// gsap.to(".for-add", {
//   onStart: () => {
//     document.querySelector(".for-add").classList.add("highlight");
//   }
// });

// // Remove a class
// gsap.to(".for-remove", {
//   delay: 0.5,
//   onStart: () => {
//     document.querySelector(".for-remove").classList.remove("small-text");
//   }
// });

// // Optional: Animate fill color or other SVG styles
// gsap.to(".for-add", {
//   fontSize: "50px",
//   fill: "#00834e", // green highlight, for example
//   duration: 1
// });

gsap.registerPlugin(ScrollTrigger);

let rotationTween;
let intervalID;

// ✅ Start continuous rotation
function startRotation() {
     if (!rotationTween) {
          rotationTween = gsap.to(".circle-text svg", {
               rotate: "+=360",
               duration: 40,
               ease: "linear",
               repeat: -1,
               transformOrigin: "50% 50%",
               transformBox: "fill-box",
          });
     }
}

// ✅ Start looping .added class on tspans
function startTspanLoop() {
     const tspans = document.querySelectorAll(".tspan-item");
     let index = 0;

     intervalID = setInterval(() => {
          tspans.forEach((t) => t.classList.remove("added")); // remove all first

          const currentIndex = index; // capture the current index
          if (tspans[currentIndex]) {
               tspans[currentIndex].classList.add("added");

               // Remove after 1.5 seconds
               setTimeout(() => {
                    tspans[currentIndex]?.classList.remove("added");
               }, 1500);
          }

          index = (index + 1) % tspans.length;
     }, 2000);
}

function stopTspanLoop() {
     clearInterval(intervalID);
}


// ✅ Start everything when .svg-wrapper enters viewport
ScrollTrigger.create({
     trigger: ".svg-wrapper",
     start: "top bottom", // as soon as it enters viewport
     onEnter: () => {
          startRotation(); // start rotating forever
          startTspanLoop(); // start adding/removing .added
     },
     onEnterBack: () => {
          startRotation();
          startTspanLoop();
     },
     onLeave: () => {
          stopTspanLoop(); // stop only tspan loop
     },
     onLeaveBack: () => {
          stopTspanLoop();
     },
});

//   gsap.to(".circle-text svg", {
//     rotate: 360,
//     transformOrigin: "center center",
//     duration: 40,
//     repeat: -1,
//     ease: ""
//   });
