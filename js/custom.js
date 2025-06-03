document.addEventListener("DOMContentLoaded", function() {
     // ✅ Toggle navbar menu
     const navbarOpen = document.getElementById("navbar-toggler");
     if (navbarOpen) {
          navbarOpen.addEventListener("click", function() {
               document.body.classList.toggle("navbar-open");
          });
     }
});

//Initiative interactions
document.querySelectorAll('.in-key.width-sm').forEach(function(elem) {
     elem.addEventListener('mouseenter', function() {
          const container = elem.closest('.initiative-item');
          const fadeText = elem.querySelector('.in-key-content');
          // const keyImgParent = elem.querySelector('.in-key-img');
          // const keyImg = elem.querySelector('.in-key-img img');
          // keyImg.style.height = keyImgParent.offsetHeight;
          if (container && fadeText) {
               container.classList.add('key-sm-hover');
               container.classList.add('lg-active');
               fadeText.classList.add('fade_text');
               setTimeout(() => {
                    fadeText.classList.remove('fade_text');
               }, 2000);
          }

     });

     elem.addEventListener('mouseleave', function() {
          const container = elem.closest('.initiative-item');
          if (container) container.classList.remove('key-sm-hover');
     });
});

document.querySelectorAll('.in-key.width-lg').forEach(function(elem) {
     elem.addEventListener('mouseenter', function() {
          const container = elem.closest('.initiative-item');
          const fadeTextLg = elem.querySelector('.in-key-content');
          if (container && fadeTextLg) {
               container.classList.add('key-lg-hover');
               fadeTextLg.classList.add('fade_text_lg');
               setTimeout(() => {
                    fadeTextLg.classList.remove('fade_text_lg');
               }, 2000);
          }
     });

     elem.addEventListener('mouseleave', function() {
          const container = elem.closest('.initiative-item');
          if (container) container.classList.remove('key-lg-hover');
     });
});

// videobg interaction
if (document.querySelector(".video-img") != null) {
     gsap.registerPlugin(ScrollTrigger);
     const growTl = gsap.timeline({
          scrollTrigger: {
               trigger: ".video-bg-img",
               scrub: false,
               start: "top center",
               end: "+=400",
               ease: "power1.inOut",
               toggleActions: "play none none none",
          },
     });
     growTl.to(".video-bg-img", {
          duration: 0.5,
          ease: "power1.inOut",
          scale: 1,
     });
     growTl.to(".video-img", {
          marginLeft: 0,
          ease: "power1.inOut",
     });
}



/******************* Events-section Slider ******************/
const swiper = new Swiper(".EventSlider", {
     direction: "horizontal",
     //   slidesPerView: 3.4,
     //   spaceBetween: 36,
     slidesOffsetBefore: 100,
     loop: false,

     breakpoints: {
          0: {
               // Small screen
               slidesPerView: 1.5,
               spaceBetween: 14,
               slidesOffsetBefore: 20,
          },
          575: {
               // Small screen
               slidesPerView: 2.4,
               spaceBetween: 16,
               slidesOffsetBefore: 30,
          },
          768: {
               slidesPerView: 3,
               spaceBetween: 16,
               slidesOffsetBefore: 30,
          },
          1024: {
               slidesPerView: 3.26,
               spaceBetween: 20,
               slidesOffsetBefore: 60,
          },
          1200: {
               slidesPerView: 3.35,
               spaceBetween: 20,
               slidesOffsetBefore: 80,
          },
          1400: {
               slidesPerView: 3.38,
               spaceBetween: 24,
          },
          1500: {
               slidesPerView: 3.37,
               spaceBetween: 24,
          },
          1700: {
               slidesPerView: 3.35,
               spaceBetween: 34,
          },
     },
});

/******************* Events-section Slider ******************/
const UpdatesFeed = new Swiper(".UpdateFeeds", {
     direction: "horizontal",
     slidesOffsetBefore: 120,
     slidesOffsetAfter: 60,
     loop: false,

     breakpoints: {
          0: {
               // Small screen
               slidesPerView: 1.4,
               spaceBetween: 14,
               slidesOffsetBefore: 20,
               slidesOffsetAfter: 20,
          },
          575: {
               // Small screen
               slidesPerView: 2.2,
               spaceBetween: 16,
               slidesOffsetBefore: 30,
          },
          768: {
               slidesPerView: 2.9,
               slidesOffsetBefore: 30,
          },
          1024: {
               slidesPerView: 4.2,
               spaceBetween: 20,
               slidesOffsetBefore: 80,
          },
          1200: {
               slidesPerView: 4.75,
               slidesOffsetBefore: 90,
               slidesOffsetAfter: 30,
          },
          1400: {
               slidesPerView: 4.75,
               spaceBetween: 24,
          },
          1500: {
               slidesPerView: 4.75,
               spaceBetween: 24,
               slidesOffsetBefore: 100,
               slidesOffsetAfter: 40,
          },
          1700: {
               slidesPerView: 4.75,
               spaceBetween: 34,
          },
     },
});

/******************* TabSelector with Dropdown js ******************/
const tabSelector = document.getElementById("tabSelector");
if (tabSelector) {
     tabSelector.addEventListener("change", function() {
          var targetId = this.value;

          // Remove active classes from all panes
          document.querySelectorAll(".tab-pane").forEach(function(pane) {
               pane.classList.remove("show", "active");
          });

          // Add active class to selected tab content
          var targetPane = document.getElementById(targetId);
          if (targetPane) {
               targetPane.classList.add("show", "active");
          }
     });
}
//circular Text JS
window.addEventListener("DOMContentLoaded", () => {
     const circularText = document.getElementById("circular-text");

     if (circularText) {
          const phrases = [
               "Watch the vision",
               "Watch the vision"
          ];

          const html = phrases.map((phrase, i) => {
               const dot = i < phrases.length - 1 ? ' <span class="circular-dot">•</span>' : ' <span class="circular-dot">•</span>\u00A0';
               return phrase + dot;
          }).join(' ');

          circularText.innerHTML = '\u00A0' + html;

          new CircleType(circularText);
     }
});


//gallery images interactions

let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
const items = document.querySelectorAll(".capture-img");
const captureSection = document.querySelector(".capture-mm");

function getRandomOffset() {
     return Math.floor(Math.random() * 15) + 5; // Between 5 and 19px
}

function isInViewport(el) {
     const rect = el.getBoundingClientRect();
     return (
          rect.top < window.innerHeight &&
          rect.bottom > 0
     );
}

window.addEventListener("scroll", () => {
     const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
     const direction = currentScroll > lastScrollTop ? "down" : "up";

     if (isInViewport(captureSection)) {
          items.forEach((item, index) => {
               const offset = getRandomOffset();
               const translateY = direction === "down" ? -offset : offset;

               gsap.to(item, {
                    y: `+=${translateY}`,
                    duration: 1.5,
                    ease: "sine.out",
                    overwrite: "auto",
                    delay: index * 0.01
               });
          });
     }

     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);


// let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
// const items = document.querySelectorAll(".capture-img");

// function getRandomOffset() {
//      return Math.floor(Math.random() * 15) + 5; // Between 4 and 12px
// }

// window.addEventListener("scroll", () => {
//      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
//      const direction = currentScroll > lastScrollTop ? "down" : "up";

//      items.forEach((item, index) => {
//           const offset = getRandomOffset();

//           // Scroll down = move image up, Scroll up = move image down
//           const translateY = direction === "down" ? -offset : offset;

//           gsap.to(item, {
//                y: `+=${translateY}`, // incremental smooth movement
//                duration: 1.5,
//                ease: "sine.out",
//                overwrite: "auto",
//                delay: index * 0.01
//           });
//      });

//      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
// }, false);

//initiative slider 
const initiativeSlider = new Swiper(".iniitative-slider", {
     slidesOffsetBefore: 30,
     loop: false,

     breakpoints: {
          0: {
               // Small screen
               slidesPerView: 1,
               spaceBetween: 16,
               slidesOffsetBefore: 0,
          },
          380: {
               slidesPerView: 1.2,
               spaceBetween: 14,
               slidesOffsetBefore: 20,
          },
          650: {
               // Small screen
               slidesPerView: 1.5,
               spaceBetween: 16,
               slidesOffsetBefore: 30,
          },
     },
});