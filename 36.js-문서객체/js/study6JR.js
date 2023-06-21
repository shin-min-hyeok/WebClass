$(document).ready(function(){

  // 버튼을 클릭했을 때 만약에 메뉴가 열려있는 상태라면? -> 메뉴를 닫는기능
  // 버튼을 클릭했을 때 만약에 메뉴가 닫혀있는 상태라면? -> 메뉴를 여는기능

  // $(".btnMenu").click(function(){
  //   $(".btnMenu").addClass("close")
  //   $("nav").addClass("show")
  // }
  
  let menuState = "false"
  $(".btnMenu").click(function(){
    if(menuState == "false"){
      $(".btnMenu").addClass("close")
      $("nav").addClass("show")
      menuState = "true"
    }else{
      $(".btnMenu").removeClass("close")
      $("nav").removeClass("show")
      menuState = "false"
    }
    
  })  
})