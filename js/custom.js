document.addEventListener("DOMContentLoaded", function() {
     // ✅ Toggle navbar menu
     const navbarOpen = document.getElementById("navbar-toggler");
     if (navbarOpen) {
          navbarOpen.addEventListener("click", function() {
               document.body.classList.toggle("navbar-open");
          });
     }
});


// videobg interaction
if (document.querySelector('.video-img') != null) {
     gsap.registerPlugin(ScrollTrigger);
     const growTl = gsap.timeline({
          scrollTrigger: {
               trigger: ".video-bg-img",
               scrub: false,
               start: "top center",
               end: "+=400",
               ease: "power1.inOut",
               toggleActions: "play none none none",
          }
     });
     growTl.to(".video-bg-img", {
          duration: 0.5,
          ease: "power1.inOut",
          scale: 1,
     });
}

if (document.querySelector('.video-play-btn') != null) {
     const circleType = new CircleType(document.getElementById('circular-text'));
}