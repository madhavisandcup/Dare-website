const sliderSection = document.querySelector('.features-verticle-slider');
const slides = document.querySelectorAll('.feature-item');
const nav = document.querySelector('.fi-navigation');
const navDots = document.querySelectorAll('.fi-line');
const lastSlide = slides[slides.length - 1];

if (sliderSection) {
     // Scroll to section on dot click
     navDots.forEach(dot => {
          dot.addEventListener('click', () => {
               const targetIndex = parseInt(dot.dataset.index);
               if (slides[targetIndex]) {
                    slides[targetIndex].scrollIntoView({ behavior: 'smooth' });
               }
          });
     });

     // Active nav dot (based on current center view)
     function updateActiveDot() {
          let index = 0;
          slides.forEach((slide, i) => {
               const rect = slide.getBoundingClientRect();
               if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                    index = i;
               }
          });

          navDots.forEach(dot => dot.classList.remove('is-active'));
          if (navDots[index]) {
               navDots[index].classList.add('is-active');
          }
     }

     // Intersection Observer: make slide active when in view
     function createObserver() {
          const thresholdValue = window.innerWidth <= 767 ? 0.5 : 1;
          const slideObserver = new IntersectionObserver(
               entries => {
                    entries.forEach(entry => {
                         if (entry.isIntersecting) {
                              entry.target.classList.add('active');
                              const fTime = entry.target.querySelector('.features-timeline-main');
                              if (fTime && !fTime.classList.contains('active-tl')) {
                                   setTimeout(() => {
                                        fTime.classList.add('active-tl');
                                   }, 500);
                              }
                              if (fTime && !fTime.classList.contains('progress-fill')) {
                                   setTimeout(() => {
                                        fTime.classList.add('progress-fill');
                                   }, 1500);
                              }
                         }
                    });
               }, {
                    threshold: thresholdValue, // Adjust this if needed
               }
          );

          slides.forEach(slide => slideObserver.observe(slide));
     }

     // Intersection Observer: show nav when section is in view
     const navObserver = new IntersectionObserver(
          entries => {
               entries.forEach(entry => {
                    if (entry.isIntersecting) {
                         nav.classList.add('visible');
                    } else {
                         nav.classList.remove('visible');
                    }
               });
          }, {
               threshold: 0.15,
          }
     );

     navObserver.observe(sliderSection);

     window.addEventListener('scroll', updateActiveDot);
     window.addEventListener('load', () => {
          updateActiveDot();
          createObserver();
     });


     // Optional: Re-evaluate on window resize (only if screen size might change e.g. rotate)
     window.addEventListener('resize', () => {
          createObserver();
     });
}