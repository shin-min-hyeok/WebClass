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
  //메인페이지 자동슬라이드

  var Meunslide = new Swiper(".MenuSlide", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch:0,
      depth: 250,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 2000,
    },
    speed:1000,
    pagination: {
      el: ".swiper-pagination",
    },
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
//메인페이지 메뉴 슬라이드 커버슬라이드

$(document).ready(function () {
  $(".btnMenu").click(function () {
    if ($(".moMenus").hasClass("show") == false) {
      $(".moMenus").addClass("show");
    } else {
      $(".moMenus").removeClass("show");
    }
  });
  $(".CtnMenu").click(function () {
    if ($(".moMenus").hasClass("show") == true) {
      $(".moMenus").removeClass("show");
    }
  });

  $(".blackcover").click(function () {
    if ($(".moMenus").hasClass("show") == true) {
      $(".moMenus").removeClass("show");
    }
  });
//  모바일 메뉴 버튼 이벤트

  $(window).scroll(function () {
    let winst = $(window).scrollTop();
    let winHeight = $(window).height() * 0.55;

    $(".mltr,.mltr2,.mltr3,.mrtl,.mrtl2,.mrtl3,.mftt,.mftt2 ").each(
      function () {
        if (winst + winHeight > $(this).offset().top) {
          $(this).addClass("on");
        } else {
          $(this).removeClass("on");
        }
      }
    );
  });
// 스크롤 이벤트

});
