$(document).ready(function () {
  let count = 0;
  setInterval(function () {
    count++;
    if (count > 2) {
      count = 0;
    }
    $(".train").css("transform", "translateY(" + -33.333 * count + "%)");
  }, 2500);

  $(".tabMenu>dt").click(function () {
    $(".tabMenu>dt").removeClass("on");
    $(this).addClass("on");

    $(".tabMenu>dd").removeClass("on");
    $(this).next().addClass("on");
  });

  $(".btnPopup").click(function () {
    $(".popup").addClass("on");
  });

  $(".btnPopupClose").click(function () {
    $(".popup").removeClass("on");
  });
});
