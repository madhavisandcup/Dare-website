// Custom cursor only for screens >= 1024px
if (window.matchMedia("(min-width: 1024px)").matches) {
     const cursorArrow = document.querySelector(".cursor");
     const cursorText = document.querySelector(".cursor_text");

     if (cursorArrow) {
          let clientX = -100;
          let clientY = -100;
          let active = false;

          const render = () => {
               if (active) {
                    TweenMax.to(cursorArrow, {
                         duration: 0.3,
                         x: clientX,
                         y: clientY,
                         ease: Power2.easeOut,
                    });
               }
               requestAnimationFrame(render);
          };

          requestAnimationFrame(render);

          const attachCursorToSection = (sectionSelector) => {
               const section = document.querySelector(sectionSelector);
               if (!section) return;

               // Track mouse only inside this section
               section.addEventListener("mouseenter", () => {
                    active = true;
                    cursorArrow.style.display = "block";
               });

               section.addEventListener("mousemove", (e) => {
                    clientX = e.clientX;
                    clientY = e.clientY;
               });

               section.addEventListener("mouseleave", () => {
                    active = false;
                    cursorArrow.style.display = "none";
               });

               // Custom text handling for links inside the section
               section.querySelectorAll("a[data-cursor-text]").forEach(link => {
                    const text = link.getAttribute("data-cursor-text");

                    link.addEventListener("mouseenter", () => {
                         cursorArrow.classList.add("cursor-show");
                         if (cursorText) cursorText.textContent = text;
                    });

                    link.addEventListener("mouseleave", () => {
                         cursorArrow.classList.remove("cursor-show");
                         if (cursorText) cursorText.textContent = "";
                    });
               });
          };

          // Only run in specific sections
          const cursorSections = [
               ".UpdateFeeds", // slider 1
               ".EventSlider",
               ".nation-tabs-wrapper",
               '.tab-news' // slider 2
          ];

          cursorSections.forEach(section => attachCursorToSection(section));
     }
}