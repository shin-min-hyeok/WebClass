$(document).ready(function(){

  // let aniamtionTerm = 0.1
  // let aniamtionDuratin = 5
  // // console.log($(."floatingTxt h1 b").length) //선택한 태그들은 배열형태로 리턴된다. 그래서 배열의 원소의 개수를 .length를 통해 구해볼 수 있다.
  // for(let i =0 ; i<$(".floatingTxt h1 b").length ; i++){
  // $(".floatingTxt h1 b:nth-of-type("+(i+1)+")").css("animation","introAni "+aniamtionDuratin+"s ease "+(aniamtionTerm*i)+"s forward;}")
  // }


  function textAni(cssSelector,option){
    let aniamtionTerm = option.aniDelay
    let aniamtionDuration = option.aniSpeed
    $(cssSelector).css("font-size","0")
    $(cssSelector+ " b").css("opacity","0").css("line-height","1").css("display","inline-block")
    .css("font-size",option.textSize+"px")
    for(let i =0 ; i<$(cssSelector+" b").length ; i++){
      // $(cssSelector+" b:nth-of-type("+(i+1)+")").css("animation","introAni "+aniamtionDuration+"s ease "+(aniamtionTerm*i)+"s forward")
      $(cssSelector+" b:nth-of-type("+(i+1)+")").css("animation","introAni "+aniamtionDuration+"s ease "+(aniamtionTerm*i)+"s forwards")
    }
  }

  textAni(".floatingTxt",{
    aniDelay:1,
    aniSpeed:0.2,
    textSize:100
  })

  textAni(".txtbox",{
    aniDelay:1,
    aniSpeed:0.2,
    textSize:100
  })
})