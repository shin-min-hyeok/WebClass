window.onload = function(){

  // let dtList = document.querySelectorAll(".bannerTapMenu>dt")
  
  // for(let i =0 ; i<dtList.length ; i++){
  //   dtList[i].addEventListener("click",function(){
  //     for(let j =0 ; j<dtList.length ; j++){
  //       dtList[j].classList.remove("on")
  //     }
  //     this.classList.add("on")
  //   })
  // }
  // let dtTap = document.querySelectorAll(".tapMenu>dt")

  // for(let i =0 ; i<dtTap.length ; i++){
  //   dtTap[i].addEventListener("click",function(){
  //     for(let k =0 ; k<dtTap.length ; k++){
  //       dtTap[k].classList.remove("on")
  //     }
  //     this.classList.add("on")
  //   })
  // }



  function tab(classname){
  let tab = document.querySelectorAll("."+classname+">dt")
  for(let i =0 ; i<tab.length ; i++){
    tab[i].addEventListener("click",function(){
      for(let j =0 ; j<tab.length ; j++){
        tab[j].classList.remove("on")
        }
        this.classList.add("on")
      })
    }
  }
  tab("tapMenu")
  tab("bannerTapMenu")



  
}