document.addEventListener("DOMContentLoaded", function () {
  // ✅ Toggle navbar menu
  const navbarOpen = document.getElementById("navbar-toggler");
  if (navbarOpen) {
    navbarOpen.addEventListener("click", function () {
      document.body.classList.toggle("navbar-open");
    });
  }

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
});

document.addEventListener("DOMContentLoaded", function () {
  // ✅ Toggle navbar menu
  const navbarOpen = document.getElementById("navbar-toggler");
  if (navbarOpen) {
    navbarOpen.addEventListener("click", function () {
      document.body.classList.toggle("navbar-open");
    });
  }
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
}

if (document.querySelector(".video-play-btn") != null) {
  const circleType = new CircleType(document.getElementById("circular-text"));
}

/******************* Events-section Slider ******************/
const swiper = new Swiper(".EventSlider", {
  direction: "horizontal",
  slidesPerView: 3.3,
  spaceBetween: 40,
  slidesOffsetBefore: 100,
  loop: false,

  breakpoints: {
    0: {
      // Small screen
      slidesPerView: 1,
    },
    768: {
      // Tablet
      slidesPerView: 2,
    },
    992: {
      // Laptop
      slidesPerView: 3,
    },
    1200: {
      // Desktop
      slidesPerView: 3.3,
    },
  },
});
