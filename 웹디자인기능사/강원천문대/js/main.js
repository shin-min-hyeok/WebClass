$(document).ready(function () {
  let count = 0;
  timer = setInterval(function () {
    count++;
    if (count > 2) {
      count = 0;
    }
    $(".train>li").removeClass("on");
    $(".train>li").eq(count).addClass("on");
  }, 2500);

  $(".TapMenu>dt").click(function () {
    $(".TapMenu>dt").removeClass("on");
    $(this).addClass("on");

    $(".TapMenu>dd").removeClass("on");
    $(this).next().addClass("on");
  });

  $(".btnPopup").click(function () {
    $(".popup").addClass("on");
  });

  $(".btnPopupClose").click(function () {
    $(".popup").removeClass("on");
  });
});
