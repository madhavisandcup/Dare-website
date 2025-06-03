// /******************** custom cursor on swiper slider **********************/
// $(".cursor-container").slick();

// let clientX = -100;
// let clientY = -100;
// const cursorArrow = document.querySelector(".cursor-arrow");
// const initCursor = () => {
// 	document.addEventListener("mousemove", (e) => {
// 		clientX = e.clientX;
// 		clientY = e.clientY;
// 	});

// 	const render = () => {
// 		TweenMax.to(cursorArrow, {
// 			duration: 0.3,
// 			x: clientX,
// 			y: clientY,
// 			ease: Power2.easeOut
// 		});
// 		requestAnimationFrame(render);
// 	};
// 	requestAnimationFrame(render);
// };

// initCursor();

// // Arrow hover effect
// const swiperPrev = document.querySelector(".swiper-button-prev");
// const swiperNext = document.querySelector(".swiper-button-next");

// swiperPrev.addEventListener("mouseenter", () => {
//   cursorArrow.classList.add("swiper-button-prev");
//   cursorArrow.classList.remove("swiper-button-next");
// });
// swiperNext.addEventListener("mouseenter", () => {
//   cursorArrow.classList.add("swiper-button-next");
//   cursorArrow.classList.remove("swiper-button-prev");
// });

// swiperPrev.addEventListener("mouseleave", () => {
//   cursorArrow.classList.remove("swiper-button-prev");
// });
// swiperNext.addEventListener("mouseleave", () => {
//   cursorArrow.classList.remove("swiper-button-next");
// });


/******************* Events-section Slider ******************/
// const UpdatesFeed = new Swiper(".UpdateFeeds", {
//      direction: "horizontal",
//      slidesOffsetBefore: 120,
//      slidesOffsetAfter: 60,
//      loop: false,

//      navigation: {
//      nextEl: ".swiper-button-next",
//      prevEl: ".swiper-button-prev",
//      },

//      breakpoints: {
//           0: {
//                // Small screen
//                slidesPerView: 1.4,
//                spaceBetween: 14,
//                slidesOffsetBefore: 20,
//                slidesOffsetAfter: 20,
//           },
//           575: {
//                // Small screen
//                slidesPerView: 2.2,
//                spaceBetween: 16,
//                slidesOffsetBefore: 30,
//           },
//           768: {
//                slidesPerView: 2.9,
//                slidesOffsetBefore: 30,
//           },
//           1024: {
//                slidesPerView: 4.2,
//                spaceBetween: 20,
//                slidesOffsetBefore: 80,
//           },
//           1200: {
//                slidesPerView: 4.75,
//                slidesOffsetBefore: 90,
//                slidesOffsetAfter: 30,
//           },
//           1400: {
//                slidesPerView: 4.75,
//                spaceBetween: 24,
//           },
//           1500: {
//                slidesPerView: 4.75,
//                spaceBetween: 24,
//                slidesOffsetBefore: 100,
//                slidesOffsetAfter: 40,
//           },
//           1700: {
//                slidesPerView: 4.75,
//                spaceBetween: 34,
//           },
//      },
// });

// // Define all selectors at the top
// let clientX = -100;
// let clientY = -100;
// const cursorArrow = document.querySelector(".cursor");
// const swiperSlider = document.querySelector(".cursor-container");
// const swiperPrev = document.querySelector(".swiper-button-prev");
// const swiperNext = document.querySelector(".swiper-button-next");

// if (cursorArrow) {
//   const initCursor = () => {
//     document.addEventListener("mousemove", (e) => {
//       clientX = e.clientX;
//       clientY = e.clientY;
//     });

//     const render = () => {
//       TweenMax.to(cursorArrow, {
//         duration: 0.3,
//         x: clientX,
//         y: clientY,
//         ease: Power2.easeOut,
//       });
//       requestAnimationFrame(render);
//     };
//     requestAnimationFrame(render);
//   };

//   initCursor();

//   // Swiper container hover
//   if (swiperSlider) {
//     swiperSlider.addEventListener("mouseenter", () => {
//       cursorArrow.classList.add("cursor-show");
//     });
//     swiperSlider.addEventListener("mouseleave", () => {
//       cursorArrow.classList.remove("cursor-show");
//     });
//   }

//   // Arrow hover effect
//   if (swiperPrev && swiperNext) {
//     swiperPrev.addEventListener("mouseenter", () => {
//       cursorArrow.classList.add("swiper-button-prev");
//       cursorArrow.classList.remove("swiper-button-next");
//     });
//     swiperNext.addEventListener("mouseenter", () => {
//       cursorArrow.classList.add("swiper-button-next");
//       cursorArrow.classList.remove("swiper-button-prev");
//     });

//     swiperPrev.addEventListener("mouseleave", () => {
//       cursorArrow.classList.remove("swiper-button-prev");
//     });
//     swiperNext.addEventListener("mouseleave", () => {
//       cursorArrow.classList.remove("swiper-button-next");
//     });
//   }

//   // 👇 Hide custom cursor when hovering over <a> inside swiper-slide
// //   document.querySelectorAll(".UpdateFeeds .swiper-slide a").forEach(link => {
// //     link.addEventListener("mouseenter", () => {
// //       cursorArrow.classList.remove("cursor-show");
// //     });
// //     link.addEventListener("mouseleave", () => {
// //       cursorArrow.classList.add("cursor-show");
// //     });
// //   });
// }