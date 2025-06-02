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
document.getElementById("tabSelector").addEventListener("change", function() {
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