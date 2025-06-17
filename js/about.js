/************************** Verticle slider - GSAP *******************************/
gsap.registerPlugin(ScrollTrigger);

const verticleScroll = document.querySelector(".verticle-scroll-slider");
const contents = gsap.utils.toArray(".panel_content");
const images = gsap.utils.toArray(".image_panel");
const totalPanels = contents.length;
const panelHeight = 168;
const panelMargin = 160;
const contentHeight = totalPanels * (panelHeight + panelMargin);
const extraBuffer = window.innerHeight * 0.8; // extra scroll after last panel

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
      transformBox: "fill-box"
    });
  }
}

// ✅ Start looping .added class on tspans
function startTspanLoop() {
  const tspans = document.querySelectorAll(".tspan-item");
  let index = 0;

  intervalID = setInterval(() => {
    tspans.forEach(t => t.classList.remove("added")); // remove all first
    tspans[index].classList.add("added");             // add to current

    // Remove after 1.5 seconds
    setTimeout(() => {
      tspans[index].classList.remove("added");
    }, 1500);

    index = (index + 1) % tspans.length; // loop to next
  }, 3000); // every 2 seconds
}

function stopTspanLoop() {
  clearInterval(intervalID);
}

// ✅ Start everything when .svg-wrapper enters viewport
ScrollTrigger.create({
  trigger: ".svg-wrapper",
  start: "top bottom", // as soon as it enters viewport
  onEnter: () => {
    startRotation();     // start rotating forever
    startTspanLoop();    // start adding/removing .added
  },
  onEnterBack: () => {
    startRotation();
    startTspanLoop();
  },
  onLeave: () => {
    stopTspanLoop();     // stop only tspan loop
  },
  onLeaveBack: () => {
    stopTspanLoop();
  }
});
