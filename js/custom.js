
document.addEventListener("DOMContentLoaded", function () {
     // ✅ Toggle navbar menu
     const navbarOpen = document.getElementById("navbar-toggler");
     if (navbarOpen) {
          navbarOpen.addEventListener("click", function () {
               document.body.classList.toggle("navbar-open");
          });
     }
});


     //Initiative interactions
     // document.querySelectorAll('.in-key.width-sm').forEach(function(elem) {
     //      elem.addEventListener('mouseenter', function() {
     //           const container = elem.closest('.initiative-item');
     //           if (container) container.classList.add('key-sm-hover');
     //      });

     //      elem.addEventListener('mouseleave', function() {
     //           const container = elem.closest('.initiative-item');
     //           if (container) container.classList.remove('key-sm-hover');
     //      });
     // });

     // document.querySelectorAll('.in-key.width-lg').forEach(function(elem) {
     //      elem.addEventListener('mouseenter', function() {
     //           const container = elem.closest('.initiative-item');
     //           if (container) container.classList.add('key-lg-hover');
     //      });

     //      elem.addEventListener('mouseleave', function() {
     //           const container = elem.closest('.initiative-item');
     //           if (container) container.classList.remove('key-lg-hover');
     //      });
     // });

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
}

if (document.querySelector(".video-play-btn") != null) {
     const circleType = new CircleType(document.getElementById("circular-text"));
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
     //   slidesPerView: 3.4,
     //   spaceBetween: 36,
     slidesOffsetBefore: 120,
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
               slidesPerView: 4.75,
               spaceBetween: 34,
          },
     },
});
