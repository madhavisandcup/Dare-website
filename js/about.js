gsap.registerPlugin(ScrollTrigger);
const container = document.querySelector(".verticle-scroll-slider");
const panels = gsap.utils.toArray(".image_panel");
let index = 0;
let isScrolling = false;

// Show first panel on load
showPanel(index);

// Create ScrollTrigger to pin the section and manage scroll inside
ScrollTrigger.create({
  trigger: container,
  start: "top 90px",
  end: "+=" + window.innerHeight * panels.length,
  pin: true,
  onEnter: () => attachScroll(),
  onLeaveBack: () => detachScroll(),
  onLeave: () => detachScroll(),
  onEnterBack: () => attachScroll(),
});

function attachScroll() {
  window.addEventListener("wheel", onScroll, { passive: false });
}

function detachScroll() {
  window.removeEventListener("wheel", onScroll);
}

function onScroll(e) {
  if (isScrolling) return;

  if (e.deltaY > 0 && index < panels.length - 1) {
    index++;
    updateSlide();
  } else if (e.deltaY < 0 && index > 0) {
    index--;
    updateSlide();
  }

  e.preventDefault();
}

function updateSlide() {
  isScrolling = true;
  showPanel(index);
  setTimeout(() => {
    isScrolling = false;
  }, 900); // delay between scrolls
}

// Fade-in/out + vertical peek effect

function showPanel(i) {
  panels.forEach((panel, idx) => {
    const content = panel.querySelector(".panel_content");

    if (idx === i) {
      // Active panel: fully visible, centered content
      gsap.to(panel, {
        opacity: 1,
        duration: 0.85,
        ease: "Power3.easeInOut",
        zIndex: 3,
        pointerEvents: "auto"
      });
      gsap.to(content, {
        yPercent: 0, // vertically centered
        duration: 0.85,
        ease: "Power3.easeInOut"
      });
    } else if (idx === i - 1) {
      // Previous panel: partially visible above, content peeks above
      gsap.to(panel, {
        opacity: 0.3,
        duration: 0.85,
        ease: "Power3.easeInOut",
        zIndex: 2,
        pointerEvents: "none"
      });
      gsap.to(content, {
        yPercent: -50, // move content up (peek above)
        duration: 0.85,
        ease: "Power3.easeInOut"
      });
    } else if (idx === i + 1) {
      // Next panel: partially visible below, content peeks below
      gsap.to(panel, {
        opacity: 0.3,
        duration: 0.85,
        ease: "Power3.easeInOut",
        zIndex: 2,
        pointerEvents: "none"
      });
      gsap.to(content, {
        yPercent: 50, // move content down (peek below)
        duration: 0.85,
        ease: "Power3.easeInOut"
      });
    } else {
      // Other panels hidden, content normal position
      gsap.to(panel, {
        opacity: 0,
        duration: 0.85,
        ease: "Power3.easeInOut",
        zIndex: 1,
        pointerEvents: "none"
      });
      gsap.to(content, {
        yPercent: 0,
        duration: 0.85,
        ease: "Power3.easeInOut"
      });
    }
  });
}