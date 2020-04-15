var name = 'foo'; // name 是全局变量
function showName(myName) {
  // myName 是传入 showName 的局部变量
  console.log(myName);
}
function sayHello() {
  // hello 被定义成局部作用域变量
  var helloString = 'hello everyone';
  console.log(helloString);
}


showName(name)
sayHello();

var name = 'foo';
function showName() {
    console.log(name);
}
function changeName() {
    var name = 'BigBear';
    showName();
}
changeName();