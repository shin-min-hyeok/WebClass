window.onload = function(){

  let newsSlider = new Swiper(".news_station",{
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints:{
      280:{
        slidesPerView : 1,
      },
      768:{
        slidesPerView : 3,
      }
    }
  });
  let noticeSlieder = new Swiper(".notice",{
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints:{
      280:{
        slidesPerView : 1,
      },
      768:{
        slidesPerView : 4,
      }
    }
  });
}


//객체-> 어떤사물을 표현하기 위해
let person1 = {
  name : "정현진",
  age : 38,
  score : {
    ko: 100,
    en: 90,
    math : 80,
  },
  friends : {
    oldfriends : ['상수','시홍','현종'],
    scgoolfriends :['민수' ,'영훈','준우']
  }
}