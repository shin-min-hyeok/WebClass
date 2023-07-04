window.onload = function(){
  let con4station = new Swiper(".con4station",{
    loop: true, // 반복
    direction: "horizontal", // 세로방향  가로(horizontal)
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 모양
      clickable: true, // 클릭시 클릭페이지로 이동
    },
  })
  let con5station = new Swiper(".con5station",{
    loop: true, // 반복
    direction: "horizontal", // 세로방향  가로(horizontal)
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 모양
      clickable: true, // 클릭시 클릭페이지로 이동
    },
  })
}

$(document).ready(function(){
  // 상-하스크롤시 부드럽게 이동
  $(window).scroll(function () {
    let winst = $(window).scrollTop();
    if (winst >= $("#con2").offset().top) {
      $("#con2").addClass("on");
    } else {
      $("#con2").removeClass("on");
    }
  });

  $("#wrap>section").on("wheel DOMMouseScroll", function (event) {

    let E = event.originalEvent;
    let delta = 0;
    if (E.detail) {
      delta = E.detail * -40;
    } else {
      delta = E.wheelDelta;
    }
    if (delta < 0) {
      //마우스 휠을 내렸을 때
      if ($(this).next().length) {
        let posTop = $(this).next().offset().top;
        $("html,body").stop().animate({ scrollTop: posTop }, 800);
      }
    } else {
      //마우스 휠을 올렸을 때
      if ($(this).prev().length != 0) {
        let posTop = $(this).prev().offset().top;
        $("html,body").stop().animate({ scrollTop: posTop }, 800);
      }
    }
    return false;
  });

    //화살표버튼 클릭시 상단으로 이동
  $(".arrow").click(function(){
    moveScroll({
      top:0,
      speed:1000
    })
  })
  //각 GNB>LI클릭시 그의 영역으로 이동
  $(".gnb>li>a").click(function(e){
    e.preventDefault()
    let target = $(this).attr("href")
    let target_top = $(target).offset().top
    moveScroll({top:target_top,speed:1000})
  })
  function moveScroll(option){
    $("html,body").stop().animate({scrollTop:option.top},option.speed)
  }
    //제목,소제목 svg효과
  $("#introtitle path").each(function(){
    let path = $(this)
    let idx = path.index()
    let secondTerm = 0.2
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

  $("#introtxt path").each(function(){
    let path = $(this)
    let idx = path.index()
    let secondTerm = 0.1
    let delay = idx*secondTerm
    
    let pathLength = $(this).get(0).getTotalLength()

    $(this).css("stroke-dasharray",pathLength)
    $(this).css("stroke-dashoffset",pathLength)
    setTimeout(function(){
      path.css("transition",`stroke-dashoffset 1s ease ${delay}s,fill 1s ease ${delay+1}s`)
    },500)   
  })
  setTimeout(function(){
    $("#introtxt").addClass("on")
  },1000)

  // 스크롤하고 svg영역에 닿으면 프로그레스 활성화
  $(window).scroll(function(){
    let a = $(window).scrollTop()
    let b = $(".skills").offset().top
    let c = $(window).height()*0.5
    console.log(c)
    if(a+b+c){
      if($(".skills").hasClass("on")==false){
        $(".skills").addClass("on")
        $(".skills>li").each(function(){
          let list = $(this)
          let percent = $(this).find(".per").text()
          let count = 0
          let circle = $(this).find("circle")

          let timer = setInterval(function(){
            count++;
            list.find(".per").text(count+"%")
            circle.css("stroke-dashoffset",314-(314*(count/100)))
            if(count>=percent){
              clearInterval(timer)
            }
          },10)
        })
      }
      
    }
  })
})
let count1 = 0;
$(document).ready(function(){
  
  $("#con6").on("wheel DOMMouseScroll", function (event) {
    // console.log(event)
    let E = event.originalEvent;
    let delta = 0;
    if (E.detail) {
      delta = E.detail * -40;
    } else {
      delta = E.wheelDelta;
    }

    if(delta <0){
      //마우스휠 내렸을 때
      count1++;
      if(count1>10){count1 =15}
      $(".popup").css("transform","translateX(-"+(-100*count1)+"%)")
    } else{
      //마우스 휠올렸을 때
      count1--;
      if(count1<0){count1=0}
      $(".popup").css("transform","translateX(-"+(-100*count1)+"%)")
    }
    return false;
  });




})