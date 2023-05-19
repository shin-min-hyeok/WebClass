window.onload = function(){
  let btn1 = document.querySelector(".btnClick")
  btn1.addEventListener("click",function(){
    //클릭했을 때 실행되는 소스코드
    document.querySelector(".txtbox").style.color="black"
  })
}