$(document).ready(function () {
  //btn클래스 버튼을 클릭했을 때 nav태그가 보이게 되도록 기능

  $(".btn").click(function () {
    // $(선택된태그).hasClass("on")
    // 선택한태그가 on이라는 클래스가 있다면 사용된 자리에 true를 리턴하고
    // 선택한태그가 on이라는 클래스가 없다면 사용된 자리에 false를 리턴하는 함수
    if ($("nav").hasClass("on") == false) {
      //메뉴가 닫혀있는 상태 -> 메뉴를 여는 기능
      $("nav").addClass("on");
    } else {
      //메뉴가 열려있는 상태 -> 메뉴를 닫는 기능
      $("nav").removeClass("on");
    }
  });

  $(".gnb>li").click(function () {
    // 리스트 클릭했을 때 내가 클릭한 리스트한테 on클래스가 있다 /없다
    if ($(this).hasClass("on") == true) {
      $(this).css("height", "50px");
      $(this).removeClass("on");
    } else {
      $(".gnb>li").css("height", "50px");
      $(".gnb>li").removeClass("on");
      let li2dep = $(this).children("ul").children().length;
      $(this).css("height", (li2dep + 1) * 50 + "px");
      $(this).addClass("on");
    }

    // $(".gnb>li").css("height","50px")

    // //여러개의 리스트 중 내가 클릭한 리스트가 포함하고있는 2뎁스 ul태그의 자식 li 태그의 개수를 구해서 그 개수에 비레한 만큼의 값으로 클릭한 리스트의 높이를 지정
    // // about클릭 -> 높이 150
    // // profile클릭 -> 높이 200

    // let li2depth = $(this).children("ul").children().length
    // $(this).css("height",(li2depth+1)*50+"px")
  });
});
