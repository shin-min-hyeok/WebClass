$(document).ready(function(){
  let count = 0;

  setInterval(function(){
    count++;
    if(count>3){count=0}
    $(".train").css("transform","translateX(-"+(count*25)+"%)")
  },2500)

  $(".next").click(function(){
    count++;
    if(count>3){count=0}
    $(".train").css("transform","translateX(-"+(count*25)+"%)")
  })
  $(".prev").click(function(){
    count--;
    if(count<0){count=3}
    $(".train").css("transform","translateX(-"+(count*25)+"%)")
  })
}) 