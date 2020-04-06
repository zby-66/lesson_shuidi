# JS
## 讲讲JS的数据类型？
最新的 ECMAScript 标准定义了 8种数据类型:
7 种原始类型
Boolean
Null
Undefined
Number
BigInt
String
Symbol
Object

## 讲讲Map和Set？
Map的key相比较普通对象来说更为灵活，普通对象的key只能以基础数据类型作为key值，并且所有传入的key值都会被转化成string类型，而Map的key可以是各种数据类型格式。
Set可以讲讲它去重的特性。

## WeakMap和Map之间的区别？
WeakMap只能以复杂数据类型作为key，并且key值是弱引用，对于垃圾回收更加友好。
https://blog.csdn.net/Ed7zgeE9X/article/details/89879406

以下三点是Map和WeakMap的主要区别：

Map对象的键可以是任何类型，但WeakMap对象中的键只能是对象引用

WeakMap不能包含无引用的对象，否则会被自动清除出集合（垃圾回收机制）。

WeakMap对象是不可枚举的，无法获取大小。


eg:
let weakmap = new WeakMap();
(function(){
    let o = {n: 1};
    weakmap.set(o, "A");
})();  // here 'o' key is garbage collected
let s = {m: 1};
weakmap.set(s, "B");
console.log(weakmap.get(s));
console.log(...weakmap); // exception thrown
weakmap.delete(s);
weakmap.clear(); // Exception, no such function
let weakmap_1 = new WeakMap([[{}, 2], [{}, 5]]); //this works
console.log(weakmap_1.size); //undefined”

const weakmap=new WeakMap();
let keyObject={id:1};
const valObject={score:100};
weakmap.set(keyObject, valObject);
console.log(weakmap.get(keyObject));
//output { score: 100 }
keyObject=null;
console.log(weakmap.has(keyObject));
//output false