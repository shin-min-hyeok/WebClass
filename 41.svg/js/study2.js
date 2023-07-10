$(document).ready(function(){

  $(".btn").click(function(){
    if($(this).parent().hasClass("on")==false){
      $(this).parent().addClass("on")
    let per = Number($(this).parent().find(".per").text())
    let circle = $(this).parent().find("circle")

    let percetTag = $(this).parent().find(".per")
    let count = 0;
    let timer = setInterval(function(){
      count++
      percetTag.text(count+"%")
      circle.css("stroke-dashoffset",314-(314*(count/100)))
      if(count>=per){
        clearInterval(timer)
      }
    },10)
    }
  })
})