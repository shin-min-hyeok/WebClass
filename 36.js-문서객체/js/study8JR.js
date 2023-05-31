let tabDescription = [
  `<h3>title1</h3>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatem deserunt alias maxime nam, consequatur debitis distinctio tenetur incidunt deleniti quisquam ipsa porro autem repellendus odit recusandae at pariatur cupiditate!</p>`,
  `<h3>title2</h3>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatem deserunt alias maxime nam, consequatur debitis distinctio tenetur incidunt deleniti quisquam ipsa porro autem repellendus odit recusandae at pariatur cupiditate!</p>`,
  `<h3>title3</h3>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatem deserunt alias maxime nam, consequatur debitis distinctio tenetur incidunt deleniti quisquam ipsa porro autem repellendus odit recusandae at pariatur cupiditate!</p>`,
  `<h3>title</h3>
  <ul>
  <li>des1</li>
  <li>des2</li>
  <li>des3</li>
  <li>des4</li>
  </ul>`
]

$(document).ready(function(){

  $(".tabTit>li").click(function(){
    $(".tabTit>li").removeClass("on")
    $(this).addClass("on")
    let idx = $(this).index() 
    //index()함수는 앞에 선택된 태그의 부모태그기준 순번을 리턴함
    $(".tabDes").html(tabDescription[idx])
  })

})