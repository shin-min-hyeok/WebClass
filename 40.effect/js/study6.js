$(document).ready(function(){

  textAni(".t1",{
      textSize:"1em",
      aniDelay:0.2,
      aniSpeed:0.5,
      effect:"moveBottomToTop"
  })

  textAni(".t2",{
      textSize:"1em",
      aniDelay:0.2,
      aniSpeed:0.5,
      effect:"moveBottomToTop"
  })
  textAni(".t3",{
    textSize:"0.2em",
    aniDelay:0.2,
    aniSpeed:0.5,
    effect:"moveBottomToTop"
    })


    let winHeight = $(window).height() //브라우저 높이
    let fixedDiv = $(".fixedEffect") // 태그를 선택하여 변수에 저장
    let fixedDivTop =fixedDiv.offset().top
  //fixedEffect 클래스 태그가 전체문서를 기준으로 했을 때 위에서 부터 떨어져있는 거리를 픽셀로계산
    let movingStation = $(".movingStation")
    let movingStationHeight = movingStation.height()


$(window).scroll(function(){
    let wstop = $(window).scrollTop()
    let scrollDistance = wstop-fixedDivTop

    if(scrollDistance<0){
    movingStation.css("position","relative")
    movingStation.css("top","0")
    }

    if(scrollDistance>=0 && scrollDistance<=7200){
      // 애니메이션 진행 구간

    let count = Math.floor(scrollDistance/1800)
    let percent = (scrollDistance/1800)-count
    console.log(count,percent)
    movingStation.css("position","fixed")
    movingStation.css("top","0")
    moveSlieder(count)
    moveTextSlider(count,percent*200)
    opacitySlider(count,percent)
      scaleImg(count,percent) //grayscale도넣을수잇음.
    }
    if(scrollDistance > 7200){
        movingStation.css("position","relative")
        movingStation.css("top","7200px")
    }
})
  function moveSlieder(idx){
      $(".train").css("transform","translateX("+(-25*idx)+"%)")
  }
  function moveTextSlider(idx,per){
      $(".train>li").eq(idx).children(".txt").css("transform","translateY(-"+per+"px)")
  }
  function opacitySlider(idx,per){
      $(".train>li").eq(idx).children(".txt").css("opacity",per)

  }
  function scaleImg(idx,per){
      $(".train>li").eq(idx).children("img").css("transform","scale("+(1+per)+")")
  }

  $(document).mousemove(function(event){
      let x = event.clientX
      let y = event.clientY

      // 커서 화살표가 따라다니는 소스
      $(".cursor").css("left",x+"px")
      $(".cursor").css("top",y+"px")
      $(".cursor").addClass("on")

      // 커서텍스트가 따라다니는 소스
      $(".curTxt").css("left",(x+20)+"px")
      $(".curTxt").css("top",(y-10)+"px")

      // 보조 커서가 나오는 소스
      $(".cursorSub").addClass("on")

      if($(".curSubbox").hasClass("on")==false){
          // 마우스가 슬라이드 영역밖에 있다면
          $(".cursorSub").css("left",(x+15)+"px")
          $(".cursorSub").css("top",(y+15)+"px")
      }else{
          // 마우스가 슬라이드 영역안에 들어갔다면
          $(".cursorSub").css("left",(x+15)+"px")
          $(".cursorSub").eq(0).css("top",(y+15)+"px")
          $(".cursorSub").eq(1).css("top",(y+30)+"px")
          $(".cursorSub").eq(2).css("top",(y+45)+"px")
          $(".cursorSub").eq(3).css("top",(y+60)+"px")
          $(".cursorSub").eq(4).css("top",(y+75)+"px")

      }
      
      
  })

  $(".fixedEffect").mouseover(function(){
      $(".curTxt").addClass("on")
      $(".curSubbox").addClass("on")

  })
  $(".fixedEffect").mouseout(function(){
      $(".curTxt").removeClass("on")
      $(".curSubbox").removeClass("on")
  })










})
