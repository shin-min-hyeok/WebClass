function Person(userName,userAge){
  this.name =userName
  this.age =userAge
  this.sayHello = function(){
    document.write("<h1>안녕하세요 "+this.name+"입니다.</h1>")
  }
  this.intro =function(){
    document.write(`<h1>${this.name}님은 ${this.age}살입니다.</h1>`)
  }
}