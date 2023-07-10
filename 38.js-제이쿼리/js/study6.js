$(document).ready(function () {
  $(window).scroll(function () {
    let winst = $(window).scrollTop();
    if (winst >= $(".con2").offset().top) {
      $(".con2").addClass("on");
    } else {
      $(".con2").removeClass("on");
    }
  });

  $(".wrap>div").on("wheel DOMMouseScroll", function (event) {
    // console.log(event)
    let E = event.originalEvent;
    let delta = 0;
    if (E.detail) {
      delta = E.detail * -40;
    } else {
      delta = E.wheelDelta;
    }

    if (delta < 0) {
      //마우스 휠을 내렸을 때
      if ($(this).next().length) {
        let posTop = $(this).next().offset().top;
        $("html,body").stop().animate({ scrollTop: posTop }, 1000);
      }
    } else {
      //마우스 휠을 올렸을 때
      if ($(this).prev().length != 0) {
        let posTop = $(this).prev().offset().top;
        $("html,body").stop().animate({ scrollTop: posTop }, 1000);
      }
    }
    return false;
  });
});
