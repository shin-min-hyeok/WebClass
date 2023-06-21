$(document).ready(function(){
  let = count = 0;
  // 다음버튼을 눌렀을 때
  $(".btnNext").click(function(){
    count++;
    if(count>3){count = 0}
    // $(".train").css("transform","translateX(-"+(count*25)+"%)")
    slideMove(count)
    $(".train>li").removeClass("on")
    $(".train>li").eq(count).addClass("on")
    $(".pagination>li").removeClass("on")
    $(".pagination>li").eq(count).addClass("on")
  })
  $(".btnPrev").click(function(){
    count--;
    if(count < 0){count = 3}
    // $(".train").css("transform","translateX(-"+(count*25)+"%)")
    slideMove(count)
    $(".train>li").removeClass("on")
    $(".train>li").eq(count).addClass("on")
    $(".pagination>li").removeClass("on")
    $(".pagination>li").eq(count).addClass("on")
  })

  function slideMove(idx){
    $(".train").css("transform","translateX(-"+(idx*25)+"%)")

  }
})