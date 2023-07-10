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