window.onload = function () {
  let MainBanner = new Swiper(".MainBanner", {
    loop: true, // 반복
    direction: "horizontal", // 세로방향  가로(horizontal)
    slidesPerView: 1,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 모양
      clickable: true, // 클릭시 클릭페이지로 이동
    },
    autoplay: {
      delay: 2300,
    },
    speed: 1000,
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
    },
  });
  let MenuSlide = new Swiper(".MenuSlide", {
    loop: true, // 반복
    direction: "horizontal", // 세로방향  가로(horizontal)
    spaceBetween: 30,
    slidesPerView: 3,
    autoplay: true,
    breakpoints: {
      280: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });
};
