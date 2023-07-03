$(document).ready(function(){


  $(window).scroll(function(){
    let winTop = $(window).scrollTop() //스크롤바 위에서 얼만큰 내려왓는지 계산
    let fixedTop = $("header").offset().top
    let distance = winTop-fixedTop
    if(distance>=150){
      $("header").css("position","fixed")
      $("header").css("left","0","top","0")
      $("header").css("background","#fff")
      $(".gnb>li>a").css("color","#000")
      $("header").css("z-index","2000")
      $("header").css("height","70px")
    }
  })

  $(".arrow").click(function(){
    moveScroll({
      top:0,
      speed:2500
    })
  })

  $(".gnb>li>a").click(function(e){
    e.preventDefault()
    let target = $(this).attr("href")
    let target_top = $(target).offset().top
    moveScroll({top:target_top,speed:1000})
  })
  function moveScroll(option){
    $("html,body").stop().animate({scrollTop:option.top},option.speed)
  }

  $("#introtitle path").each(function(){
    let path = $(this)
    let idx = path.index()
    let secondTerm = 0.5
    let delay = idx*secondTerm

    let pathLength = $(this).get(0).getTotalLength()
    $(this).css("stroke-dasharray",pathLength)
    $(this).css("stroke-dashoffset",pathLength)

    setTimeout(function(){
      path.css("transition",`stroke-dashoffset 1s ease ${delay}s,fill 1s ease ${delay+1}s`)
    },500)

    
  })

  setTimeout(function(){
    $("#introtitle").addClass("on")
  },1000)
})