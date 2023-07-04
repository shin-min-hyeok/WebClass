$(document).ready(function(){
    // 1.gnb클래스에 마우스를 올리면 header 태그에 on클래스가 추가되어서 커버가 깔리게 됨
    $(".gnb").mouseover(function(){
      $("header").addClass("on")
    })
    // 2.gnb클래스에서 마우스를 빼면 header태그에 on클래가 삭제되어서 커버가 걷혀짐
    $(".gnb").mouseout(function(){
      $("header").removeClass("on")
    })
})