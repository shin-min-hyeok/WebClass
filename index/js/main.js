$(document).ready(function(){
  let count = 0;

  setInterval(function(){
    count++;    
    if(count>2){count=0}
    $(".train").css("transform","translateY("+(-33.333*count)+"%)")
  },2500)

  // setInterval(function(){
  //   count++;
  //   if(count>2){count=0}
  //   $(".train>li").removeClass("on")
  //   $(".train>li").eq(count).addClass("on")
  // },2500)
    // 페이드인 페이드 아웃 자동슬라이드


  $(".tabMeun>dt").click(function(){
    $(".tabMeun>dt").removeClass("on")
    $(this).addClass("on")

    $(".tabMeun>dd").removeClass("on")
    $(this).next().addClass("on")
  })

  $(".btnPopup").click(function(){
    $(".popUP").addClass("on")

    $(".btnPopupClose").click(function(){
      $(".popUP").removeClass("on")
  })
  })
})