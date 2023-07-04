$(document).ready(function(){

  $(".TabMenu>dt").click(function(){
    $(".TabMenu>dt").removeClass("on")
    $(this).addClass("on")

    $(".TabMenu>dd").removeClass("on")
    $(this).next().addClass("on")
  })

})