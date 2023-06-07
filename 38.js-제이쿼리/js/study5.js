$(document).ready(function(){


  // $(".box").animate({width:400,height:400},1000)

  // $(".box").animate({width:400},1000).animate({height:400},1000).clearQueue()
  // $(".box").animate({width:400},1000).animate({height:400},1000).stop()
  // $(".box").animate({width:400},1000).delay(1000).animate({height:400},1000)

  let b1top = $(".b1").offset().top
  let b2top = $(".b2").offset().top
  $("html,body").animate({scrollTop:b2top},500)
})