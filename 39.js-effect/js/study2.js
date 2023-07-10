$(document).ready(function(){
  //문서가 다 잃힌 뒤 한번 실행되는 소스코드

  $(".box").click(function(){
    alert("box클래스르 클릭하였습니다.")
  })

  $(".btn").click(function(){
    alert("span태그를 클릭하였습니다.")
    return false

  })
})