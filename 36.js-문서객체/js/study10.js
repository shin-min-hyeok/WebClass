window.onload = function () {
  let station1 = new Swiper(".station1", {
    loop: true, // 반복
    direction: "horizontal", // 세로방향  가로(horizontal)
    // slidesPerView:3,         // 슬라이드 개수의 반만큼 최대 적용
    // spaceBetween:40,         // 사이여백
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 모양
      clickable: true, // 클릭시 클릭페이지로 이동
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1000,
    },
    speed: 1000,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  document
    .querySelector(".station1")
    .addEventListener("mouseover", function () {
      station1.autoplay.stop();
    });
  document.querySelector(".station1").addEventListener("mouseout", function () {
    station1.autoplay.start();
  });
};
