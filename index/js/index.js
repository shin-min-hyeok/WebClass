$(document).ready(function(){
  let count = 0;
  setInterval(function(){
    count++;
    if(count >2){count=0;}
    moveSlider(count);
    $(".station").css("transform","translateY("+(count*-100)+"%)")
    },2700)

    let tabTit = $(".tapTit>li");
    let tabDes = $(".tapDes>ul>li");
  
    tabDes.hide().eq(0).show();
  
    tabTit.click(function (e) {
      preventDefalut()
      let target = $(this);
      let index = target.index();
  
      tabTit.removeClass("on");
      target.addClass("on");
      tabDes.css("display", "none");
      tabDes.eq(index).css("display", "block");
    });

})
function moveSlider(idx) {
  $(".station").css("transform", "translateY(" + -33 * idx + "%)");
}
