window.onload = function(){
  let con4Station = new Swiper(".con4Station", {
    grabCursor: true,
    // autoplay:true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [180, 0, 0],
      },
      next: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [-180, 0, 0],
      },
    },
  });

  let con5station = new Swiper(".con5station",{
    loop: true, // 반복
    direction: "horizontal", // 세로방향  가로(horizontal)
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 모양
      clickable: true, // 클릭시 클릭페이지로 이동
    },
  })
  var con7station = new Swiper(".con7station", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var con6Station = new Swiper(".con6Station", {
    grabCursor: true,
    loop:true,
    effect: "fade",
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });

  $.fn.boom = function(e) {
    var colors = [
      '#ffb3f6',
      '#7aa0ff',
      '#333',
      // '#FFD100',
      // '#FF9300',
      // '#FF7FA4'
    ];
    var shapes = [
      '<polygon class="star" points="21,0,28.053423027509677,11.29179606750063,40.97218684219823,14.510643118126104,32.412678195541844,24.70820393249937,33.34349029814194,37.989356881873896,21,33,8.656509701858067,37.989356881873896,9.587321804458158,24.70820393249937,1.0278131578017735,14.510643118126108,13.94657697249032,11.291796067500632"></polygon>', 
      // '<path class="circle" d="m 20 1 a 1 1 0 0 0 0 25 a 1 1 0 0 0 0 -25"></path>',
      '<polygon class="other-star" points="18,0,22.242640687119284,13.757359312880714,36,18,22.242640687119284,22.242640687119284,18.000000000000004,36,13.757359312880716,22.242640687119284,0,18.000000000000004,13.757359312880714,13.757359312880716"></polygon>',
      '<polygon class="diamond" points="18,0,27.192388155425117,8.80761184457488,36,18,27.19238815542512,27.192388155425117,18.000000000000004,36,8.807611844574883,27.19238815542512,0,18.000000000000004,8.80761184457488,8.807611844574884"></polygon>'
    ];
  
    var btn = $(this);
    var group = [];
    var num = Math.floor(Math.random() * 50) + 30;
  
    for(i = 0; i < num; i++) {
      var randBG = Math.floor(Math.random() * colors.length);
      var getShape = Math.floor(Math.random() * shapes.length);
      var c = Math.floor(Math.random() * 10) + 5;
      var scale = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
      var x = Math.floor(Math.random() * (150 + 100)) - 100;
      var y = Math.floor(Math.random() * (150 + 100)) - 100;
      var sec = Math.floor(Math.random() * 1700) + 1000;
      var cir = $('<div class="cir"></div>');
      var shape = $('<svg class="shape">'+shapes[getShape]+'</svg>');
      
      shape.css({
        top: e.pageY - btn.offset().top + 20,
        left: e.pageX - btn.offset().left + 40,
        'transform': 'scale(0.'+scale+')',
        'transition': sec + 'ms',
        'fill': colors[randBG]
      });
  
      btn.siblings('.btn-particles').append(shape);
  
      group.push({shape: shape, x: x, y: y});
    }
    
    for (var a = 0; a < group.length; a++) {
      var shape = group[a].shape;
      var x = group[a].x, y = group[a].y;
      shape.css({
        left: x + 50,
        top: y + 15,
        'transform': 'scale(0)'
      });
    }
    
    setTimeout(function() {
      for (var b = 0; b < group.length; b++) {
        var shape = group[b].shape;
        shape.remove();
      }
      group = [];
    }, 2000);
  
  } 
  
  $(function() {
    $(document).on('click', '.btn', function(e) {
      $(this).boom(e);
    });
  
  });
// 마우스커서 이벤트
  let c = document.querySelector(".c");

window.addEventListener("mousemove", (e) => {

  requestAnimationFrame(() => {
    c.style.top = e.pageY + "px";
    c.style.left = e.pageX + "px";

    let d = document.createElement("div");
    d.classList.add('co');
    d.style.top = e.pageY + "px";
    d.style.left = e.pageX + "px";
    d.style.setProperty(`--hue`, Math.floor(Math.random() * 360));

    setTimeout(() => {
      d.style.opacity = 0;
      d.style.transform = 'scale(12)';
      setTimeout(() => c.removeChild(d), 1100);
    }, 500)

    c.appendChild(d);
  })
});
window.addEventListener("DOMContentLoaded",() => {
  const dp = new DecayingPreloader(".pl");
});

class DecayingPreloader {
  particles = [];
  totalParticles = 120;
  replayTimeout = null;

  constructor(el) {
    this.el = document.querySelector(el);
    this.particleGroup = this.el?.querySelector("[data-particles]");
    this.worm = this.el?.querySelector("[data-worm]");

    this.init();
  }
  init() {
    this.spawnParticles(this.totalParticles);
    this.worm?.addEventListener("animationend",this.replayParticles.bind(this));
  }
  createParticle(x,y,r,delay) {
    const particle = new DecayParticle(x,y,r,delay);
    this.particleGroup?.appendChild(particle.g);
    // animation params
    particle.gAnimation = particle.g.animate(
      [
        { transform: `translate(${particle.x}px,0)` },
        { transform: `translate(${particle.x + particle.dx}px,0)` },
      ],
      { delay: particle.delay, duration: particle.duration, easing: "linear" }
    );
    particle.cAnimation = particle.c.animate(
      [
        { opacity: 1, transform: `translate(0,${particle.y}px) scale(1)` },
        { opacity: 1, transform: `translate(0,${particle.y + particle.dy}px) scale(0)` },
      ],
      { delay: particle.delay, duration: particle.duration, easing: "ease-in" }
    );
    // finally create the particle
    this.particles.push(particle);
  }
  replayParticles() {
    const movingClass = "pl__worm--moving";
    const timeout = 800;
    // retrigger the worm animation
    this.worm.classList.remove(movingClass);
    clearTimeout(this.replayTimeout);

    this.replayTimeout = setTimeout(() => {
      this.worm.classList.add(movingClass);
      // restart the particles
      this.particles.forEach(particle => {
        particle.gAnimation.finish();
        particle.gAnimation.play();
        particle.cAnimation.finish();
        particle.cAnimation.play();
      });
    },timeout);
  }
  spawnParticles(count = 1) {
    const centerXY = 64;
    const radius = 56;
    const loops = 4;
    const maxDelayPerLoop = 2000;
    const particlesPerLoop = Math.round(this.totalParticles / loops);
    const angleOffset = -2;
    const particleRadius = 7;

    for (let c = 0; c < count; ++c) {
      // place along the ring
      const percent = Utils.easeInOutCubic(c % particlesPerLoop / particlesPerLoop);
      const angle = 360 * percent + angleOffset;
      const x = centerXY + radius * Math.sin(Utils.degToRad(angle));
      const y = centerXY - radius * Math.cos(Utils.degToRad(angle));
      const loopsCompleted = Math.floor(c / particlesPerLoop);
      const delay = maxDelayPerLoop * percent + maxDelayPerLoop * loopsCompleted;

      this.createParticle(x,y,particleRadius,delay);
    }
  }
}



}



$(document).ready(function(){
  
  
  $(window).scroll(function(){
    let a = $(window).scrollTop()
    let b = $(".languageslist").offset().top
    let c = $(window).height()*0.5

    if(a+c>=b){
        if($(".languageslist").hasClass("on")==false){
            // skill클래스에 on클래스가 없다면
            $(".languageslist").addClass("on")
            $(".languageslist>li").each(function(){
                let list = $(this)
                let percent = $(this).find(".per").text()
                let count = 0
                let circle = $(this).find("circle")

                let timer = setInterval(function(){
                    count++
                    list.find(".per").text(count+"%")
                    circle.css("stroke-dashoffset",314-(314*(count/100)))
                    if(count>=percent){
                        clearInterval(timer)
                    }
                },10)
            })
        }
    }

})




  // $(".designplan").on("wheel DOMMouseScroll", function (event){
  //   return false;
  // })


  // 상-하스크롤시 부드럽게 이동
  $(window).scroll(function () {
    let winst = $(window).scrollTop();
    if (winst >= $("#con2").offset().top) {
      $("#con2").addClass("on");
    } else {
      $("#con2").removeClass("on");
    }
  });

  $("#wrap>section").on("wheel DOMMouseScroll", function (event) {

    let E = event.originalEvent;
    let delta = 0;
    if (E.detail) {
      delta = E.detail * -40;
    } else {
      delta = E.wheelDelta;
    }

    if($(this).attr("id")=="con7" && $(this).children(".designplan").hasClass("on")==true){
      return;
    }
    
    if($(this).attr("id")=="con6"){}

    if (delta < 0) {
      //마우스 휠을 내렸을 때
      if ($(this).next().length) {
        let posTop = $(this).next().offset().top;
        $("html,body").stop().animate({ scrollTop: posTop }, 1000);
      }
    } else {
      //마우스 휠을 올렸을 때
      if ($(this).prev().length != 0) {
        let posTop = $(this).prev().offset().top;
        $("html,body").stop().animate({ scrollTop: posTop }, 1000);
      }
    }
    return false;
  });

    //화살표버튼 클릭시 상단으로 이동
  $(".arrow").click(function(){
    moveScroll({
      top:0,
      speed:1500
    })
  })
  //-------------------------------

  // 탭이벤트
  // ---------------------

  // 팝업창 이벤트
  $(".link_none").click(function(e){
    e.preventDefault(); //a태그의 기본 기능 제거
  })

  $(".RedesignBtn").click(function(){
    $(".designplan").addClass("on")
  })

  $(".planBtn>i").click(function(){
    $(".designplan").removeClass("on")
  })
//------------------------ 
  

  
  //각 GNB>LI클릭시 그의 영역으로 이동
  $(".gnb>li>a").click(function(e){
    e.preventDefault()
    let target = $(this).attr("href")
    let target_top = $(target).offset().top
    moveScroll({top:target_top,speed:2000})
  })
  function moveScroll(option){
    $("html,body").stop().animate({scrollTop:option.top},option.speed)
  }
    //제목,소제목 svg효과
  $("#introtitle path").each(function(){
    let path = $(this)
    let idx = path.index()
    let secondTerm = 0.2
    let delay = idx*secondTerm

    let pathLength = $(this).get(0).getTotalLength()

    $(this).css("stroke-dasharray",pathLength)
    $(this).css("stroke-dashoffset",pathLength)
    setTimeout(function(){
      path.css("transition",`stroke-dashoffset 1s ease ${delay}s,fill 1s ease ${delay+1}s`)
    },500)   
  })
  setTimeout(function(){
    $("#introtitle").addClass("on")
  },1000)

  $("#introtxt path").each(function(){
    let path = $(this)
    let idx = path.index()
    let secondTerm = 0.1
    let delay = idx*secondTerm
    
    let pathLength = $(this).get(0).getTotalLength()

    $(this).css("stroke-dasharray",pathLength)
    $(this).css("stroke-dashoffset",pathLength)
    setTimeout(function(){
      path.css("transition",`stroke-dashoffset 1s ease ${delay}s,fill 1s ease ${delay+1}s`)
    },500)   
  })
  setTimeout(function(){
    $("#introtxt").addClass("on")
  },1000)

  //스크롤 슬라이드 구현//

  //   let winHeight = $(window).height() //브라우저 높이
  //   let fixedDiv = $(".fixedEffect") // 태그를 선택하여 변수에 저장
  //   let fixedDivTop =fixedDiv.offset().top
  //   //fixedEffect 클래스 태그가 전체문서를 기준으로 했을 때 위에서 부터 떨어져있는 거리를 픽셀로계산
  //   let movingStation = $(".movingStation")
  //   let movingStationHeight = movingStation.height()

  //   $(window).scroll(function(){
  //     let wstop = $(window).scrollTop()
  //     let scrollDistance = wstop-fixedDivTop
  
  //     if(scrollDistance<0){
  //     movingStation.css("position","relative")
  //     movingStation.css("top","0")
  //     }
  
  //     if(scrollDistance>=0 && scrollDistance<=7300){
  //       // 애니메이션 진행 구간
  
  //     let count = Math.floor(scrollDistance/1800)
  //     let percent = (scrollDistance/1800)-count
  //     console.log(count,percent)
  //     movingStation.css("position","fixed")
  //     movingStation.css("top","0")
  //     moveSlieder(count)
  //       scaleImg(count,percent) //grayscale도넣을수잇음.
  //     }
  //     if(scrollDistance > 7300){
  //         movingStation.css("position","relative")
  //         movingStation.css("top","7300px")
  //     }
  // })
  //   function moveSlieder(idx){
  //       $(".popup").css("transform","translateX("+(-25*idx)+"%)")
  //   }
  //   function opacitySlider(idx,per){
  //       $(".popup>li").eq(idx).children(".txt").css("opacity",per)
  //   }
  //   function scaleImg(idx,per){
  //       $(".popup>li").eq(idx).children("img").css("transform","scale("+(1+per)+")")
  //   }    
})

