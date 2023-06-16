$(document).ready(function(){

  let count = 0;
  $(".btnNext").click(function(e){
    e.preventDefault() //클릭했을 때 a태그의 기본기능을 억제(스크롤바가 가장위로 올라감 방짐)
    count++;
    if(count >4){
      count=0;
    }moveSlider(count);
    $(".train").css("transform","translateY("+(count*-20)+"%)")
  })


  $(".btnPrev").click(function(e){
    e.preventDefault()
    count--;
    if(count <0){
      count=4;
    }moveSlider(count);
    $(".train").css("transform","translateY("+(count*-20)+"%)")
  })

  let timer =setInterval(function(){
    count++;
    if(count >4){count=0;}
    moveSlider(count);
    $(".train").css("transform","translateY("+(count*-20)+"%)")
    },2500)
    // 자동슬라이드
    
    $(".station").mouseover(function(){
      clearInterval(timer)
    })
    // 마우스 올릴시 멈춤

    $(".station").mouseout(function(){
      timer = setInterval(function(){
        count++;
        if(count >4){count=0;}
        moveSlider(count);
        $(".train").css("transform","translateY("+(count*-20)+"%)")
      },2500)
    })
    // 마우스 올리고 빼면 다시 자동슬라이드

  function moveSlider(idx) {
    $(".train").css("transform", "translateY(" + -20 * idx + "%)");
  }
})