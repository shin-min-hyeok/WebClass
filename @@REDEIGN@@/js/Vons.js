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

  $(window).scroll(function () {
    let winst = $(window).scrollTop();
    let winHeight = $(window).height() * 0.55;

    $(".mltr,.mltr2,.mltr3,.mrtl,.mrtl2,.mrtl3,.mftt ").each(function () {
      if (winst + winHeight > $(this).offset().top) {
        $(this).addClass("on");
      } else {
        $(this).removeClass("on");
      }
    });
  });
});
