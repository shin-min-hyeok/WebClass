window.onload = function(){
  let title = document.querySelector("#title")
  title.style.color = "blue"

  let titleParent= title.parentElement
  titleParent.style.border = "1px solid blue"

  let ulTag = document.querySelector(".list")
  let list = ulTag.children
  
  for (let i= 0; i <list.length ; i++){
    list[i].style.borderBottom = "1px solid black"
  }


  title.nextElementSibling.style.background = "lightblue"
  list[0].nextElementSibling.nextElementSibling.style.color = "red"
  //다음형제 태그선택
  ulTag.previousElementSibling.style.textDecoration= "underline"
  //이전형제 태그선택
}