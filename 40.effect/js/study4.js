$(document).ready(function(){
  // for(let i=1; i<=20; i++){
  //   $(`.train`).append(`
  //   <li>
  //   <img class="small" src="./img/s${i}.jpg" alt="작은이미지${i}">
  //   <img class="big" src="./img/pic${i}.jpg" alt="큰이미지${i}">
  //   <h2 class="title">art work ${i}</h2>
  //   <p>Artwork description comes here.<br>2023.06.20</p>
  //   <span class="btnClose">Close</span>
  //   </li>
  //   `)
  // }
  let result = "";
  for(let i=0 ; i<20; i++){
    result+=`<li>
    <img class="small" src="./img/${artwork[i].imgFileName}" 
    alt="${artwork[i].title}">
    <h2 class="title">${artwork[i].title}</h2>
    <p>${artwork[i].description}</p>
    <span class="btnClose">close</span>
  </li>`
  }
  $(".train").html(result)

  $(".stationMenu>li").click(function(){
    let idx = $(this).index() // 클릭한 리스트의 순번을 리턴함.
    count = idx*5; //정해진 순번에 5를 곱한 값을 전역변수 count에 저장함으로써 휠을 내렸을 때 이동되는 기능이 정상적으로 작동되게끔 해주는 코드
    // 06 ->  0px
    // 06 ->  -1000px
    // 11 ->  -2000px
    // 16 ->  -3000px
    $(".train").css("transform","translateX("+(-1000*idx)+"px)")
  })
  

  let count = 0;
  $(".station").on("wheel DOMMouseScroll", function (event) {
    // console.log(event)
    let E = event.originalEvent;
    let delta = 0;
    if (E.detail) {
      delta = E.detail * -40;
    } else {
      delta = E.wheelDelta;
    }

    if (delta < 0) {
      //마우스 휠을 내렸을 때
      count++;
      if(count>15){count =15}
      $(".train").css("transform","translateX("+(-200*count)+"px)")
    } else {
      //마우스 휠을 올렸을 때
      count--
      if(count <0){count =0}
      $(".train").css("transform","translateX("+(-200*count)+"px)")
    }
    return false;
  });

  // 클릭한 리스트(기차칸)의 활성화 스타일 기능
  $(".train>li").click(function(){
    $(".train>li").removeClass("on")
    $(this).addClass("on")
    let idx = $(this).index()
    count = idx; //동기화시킴
    $(".train").css("transform","translateX("+(-200*idx)+"px)")
  })

  // 닫는버튼 기능
  $(".btnClose").click(function(){
    $(".train>li").removeClass("on")
    return false; // 상위태그로 클릭이벤트가 전달되지않게(버블링되지않게) 설정
  })
})

