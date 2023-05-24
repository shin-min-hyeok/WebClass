window.onload = function(){

  let slider1 = new Swiper(".station1",{
    loop: true,
    slidesPerView:1,
    pagination: {
      el: ".swiper-pagination",
    }
  })

  var slider2 = new Swiper(".station2", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  })

}