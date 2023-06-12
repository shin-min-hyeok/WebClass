$(document).ready(function () {
  let tabTit = $(".tabTit>li");
  let tabDes = $(".tabDes>ul>li");

  tabDes.hide().eq(0).show();

  tabTit.click(function () {
    let target = $(this);
    let index = target.index();

    tabTit.removeClass("on");
    target.addClass("on");
    tabDes.css("display", "none");
    tabDes.eq(index).css("display", "block");
  });
});
