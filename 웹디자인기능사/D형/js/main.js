$(document).ready(function () {
  let count = 0;

  setInterval(function () {
    count++;
    if (count > 2) {
      count = 0;
    }
    $(".train").css("transform", "translateY(-" + count * 100 + "%)");
  }, 2500);
});
