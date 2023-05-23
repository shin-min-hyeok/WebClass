window.onload = function(){

  let nextBtn= document.querySelector(".btnNext")
  let prevBtn= document.querySelector(".btnPrev")
  let train = document.querySelector(".train")
  let trainList = train.children
  let count = 0

  nextBtn.addEventListener("click",function(){
    //train클래스를 선택해서 왼쪽으로 500픽셀 이동
    count++
    if(count>3){count=0}
    train.style.transform = `translateX(-${25*count}%)`

    for(let i =0 ; i<trainList.length ; i++){
      trainList[i].classList.remove("on")
    }
    trainList[count].classList.add("on")
  })
    
  prevBtn.addEventListener("click",function(){
    count--
    if(count<0){count=3}
    train.style.transform = `translateX(-${25*count}%)`
    for(let i=0; i<trainList.length; i++){
      trainList[i].classList.remove(`on`)
    }
    trainList[count].classList.add(`on`)
  })

}