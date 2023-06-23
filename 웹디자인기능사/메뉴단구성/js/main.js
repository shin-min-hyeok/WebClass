$(document).ready(function () {
  let count = 0;
  setInterval(function () {
    count++;
    if (count > 2) {
      count = 0;
    }
    $(".train>li").removeClass("on");
    $(".train>li").eq(count).addClass("on");
  }, 2800);
  //자동슬라이드이벤트

  $(".tabMenu>dt").click(function () {
    $(".tabMenu>dt").removeClass("on");
    $(this).addClass("on");
    $(".tabMenu>dd").removeClass("on");
    $(this).next().addClass("on");
  });
  //탭메뉴이벤트

  $(".btnPopup").click(function () {
    $(".popup").addClass("on");
  });
  $(".btnPopupClose").click(function () {
    $(".popup").removeClass("on");
  });
  //팝업창이벤트
});
