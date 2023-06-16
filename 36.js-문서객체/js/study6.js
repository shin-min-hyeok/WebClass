window.onload = function(){
  let menuState ="false"
  // 문서를 끝까지 읽은 뒤 실행할 소스코드
  let btnMenu = document.querySelector(".btnMenu")
  let nav = document.querySelector("nav")

  btnMenu.addEventListener("click",function(){
    if(menuState == "false"){
      //메뉴가 닫혀있는 경우 실행되는 코드
      btnMenu.classList.add("close")
      nav.classList.add("show")
      menuState = "true"
    }else{
      //메뉴가 열려있는 경우 실행되는 코드
      btnMenu.classList.remove("close")
      nav.classList.remove("show")
      menuState = "false"
    }
  })



}
