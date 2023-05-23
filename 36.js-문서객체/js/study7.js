window.onload = function(){

  let dtList = document.querySelectorAll(".tabMenu>dt")
  
  for(let i =0 ; i<dtList.length ; i++){
    dtList[i].addEventListener("click",function(){
      for(let j =0 ; j<dtList.length ; j++){
        dtList[j].classList.remove("on")
      }
      this.classList.add("on")
      //클릭하는 맥락안에서 클릭한 태그를 this로 표현할 수 있다.
    })
  }
}
