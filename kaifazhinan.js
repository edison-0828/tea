// console.log("%s:%d","hello",25);


// 1.创建模块
// var name;
// exports.setName = function(theName){
//   name = theName;
// }
// exports.sayHello = function(){
//   console.log('hello, '+name);
// }


// 2.封装对象
function hello(){
  var name;
  this.setName = function(theName){
    name = theName;
  }
  this.sayHello = function(){
    console.log('hello, '+name);
  }
}
  // console.log(this);

module.exports = hello;