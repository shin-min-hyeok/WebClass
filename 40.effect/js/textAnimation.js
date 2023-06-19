
function textAni(cssSelector,option){
  // option정보
  // aniDely 글자들이 나타나는 간격
  // aniSpeed 글자들이 나타나는 속도
  // textSize 글자들에게 적용하는 크기



  let aniamtionTerm = option.aniDelay?option.aniDelay:0.5
  let aniamtionDuration = option.aniSpeed?option.aniSpeed:1
  let aniTxtSize = option.textSize?option.aniTxtSisz:20

  $(cssSelector).css("font-size","0")
  $(cssSelector+ " b").css("opacity","0").css("line-height","1").css("display","inline-block")
  .css("font-size",aniTxtSize+"px")

  for(let i =0 ; i<$(cssSelector+" b").length ; i++){
    $(cssSelector+" b:nth-of-type("+(i+1)+")").css("animation","introAni "+aniamtionDuration+"s ease "+(aniamtionTerm*i)+"s forwards")
  }
}