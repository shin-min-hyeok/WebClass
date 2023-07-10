window.onload = function(){

  // let path_a = document.querySelector(".a")
  let path_a = $(".c1").get(0) //제이쿼리 문서객체를 자바스크립트 문서객체로 변환하여 리턴함
  let pathLength = path_a.getTotalLength()
  // getTotalLength() 함수는 선택한 svg태그안의 오브젝트의 둘레길이를 계산해서 리턴함
  // 자바스크립트 문서객체의 메서드
  $(".c1").css("stroke-dasharray",pathLength)
  $(".c1").css("stroke-dashoffset",pathLength)
}