
![](https://user-gold-cdn.xitu.io/2020/3/5/170aa6ec52383409?w=750&h=300&f=jpeg&s=14853)

------------------------------------------

## 一.前言
---------------
文章主要讲JS Map对象的用法和如何手写Map，非常适合初步学习了JS的同学，适当的学会手写JS源码的技能，对JS理解和面试都有很大的帮助。大多数人都知道Map方法的使用，但是在网上对Map源码实现的文章很少，希望通过这篇文章可以帮助到大家对Map方法的理解。

#### 说在前面
> Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。本文会先简单介绍用法，再介绍手写Map,
想让Map现原形就快快花几分钟时间浏览这篇文章吧！

---------------

## 二. Map方法的使用

-------------------------
Map是一组键值对的结构，具有极快的查找速度。

>举个例子，假设要根据同学的名字查找对应的成绩，如果用Array实现，需要两个Array：

```
var names = ['lm', 'dz', 'xxy'];
var scores = [100, 90, 80];
```
我们需要实现这个要求，就先要遍历`names`数组，找到需要查询同学名字的位置，然后去`scores`数组中找到相应的位置，取出成绩。这样的话有两个缺点：
1. 数组越长，需要查询耗时越长。
2. 如果数据很多，导入数据的时候，很容易出错。

如果用Map实现，只需要一个“名字”-“成绩”的对照表，直接根据名字查找成绩，一个键（名字）和对应一个值（成绩）进行绑定，无论这个表有多大，，也不用担心出错。用JavaScript使用Map实现如下：

```
var m = new Map([['lm', 100], ['dz', 90], ['xxy', 80]]);
m.get('lm'); //100
m.size();//3
m.set('xp', 90); // 添加新的key-value
m.delete('xxy'); // 删除key 'xxy'
```
通过Map的`get`方法查询到`lm`同学100分，用`size`获取有多少个键值对,用`set`方法添加`xp`的成绩，用`delete`方法删除`xxy`的成绩。

**我们需要注意的是一个key只能对应一个value，多次对一个key放入value，后面的值会把前面的值冲掉：**

```
var m = new Map();
m.set('xp', 70);
m.set('xp', 90);
m.get('xp'); // 90
```

-------------------------------------------

## 三.手写Map方法
> 想要手写Map方法，首先需要知道的是它ES6标准新增的数据类型，是键/值对的集合。这个数据类型，可以使用很多方法来操作它。下面就让我们，小手一敲，让它现出原形吧~

- 定义Map方法

   写一个方法首当其冲的当然是要定义它，并且声明方法里面的参数。
   
 ```
/** 
     *  
     * 描述：js实现的map方法 
     * @returns {Map} 
     */  
    function Map(){  
        var struct = function(key, value) {  
         this.key = key;  
         this.value = value;  
        }; 
    }
 ```
- 写set方法

  需要添加键值对，我们需要注意的是，如果之前就存在这个键值对，需要对它的`value`进行覆盖更新。如果不存在，则直接保存这对键值。
  
```
// 添加map键值对  
        var set = function(key, value){
        //遍历数组，如果存在，则进行覆盖
          for (var i = 0; i < this.arr.length; i++) {  
          if ( this.arr[i].key === key ) {  
           this.arr[i].value = value;  
           return;  
          }  
         };
         //之前的数据里面没有这个对键值，直接对应保存
         this.arr[this.arr.length] = new struct(key, value);  
        };  
```
- 写get方法

  完成`get`方法，需要实现根据`key`获取`value`，如果`key`存在则获取对应的`value`,否则返回`null` ，代码如下：
  
```
//  根据key获取value   
        var get = function(key) {  
         for (var i = 0; i < this.arr.length; i++) {  
          if ( this.arr[i].key === key ) {  
           return this.arr[i].value;  
          }  
         }  
        return null;  
        };  
```
- 写remove方法

 `Map`方法中可可以通过`key`,来完成删除键值对。要删除键值对，作者想到的是，不管存在与否，遍历所有数组，先把栈顶的`v.key`,用`pop`拿出，如果需要删除的`key`与`v.key`一致，则`continue`,否则用`unshift(v)`,将其恢复。代码如下：
 
```
//   根据key删除  
        var remove = function(key) {  
         var v;  
         for (var i = 0; i < this.arr.length; i++) {  
          v = this.arr.pop();  
          if ( v.key === key ) {  
           continue;  
          }  
          this.arr.unshift(v);  
         }  
        };  
```
- 写size和isEmpty方法

这个两个方法的实现都很简单，相信每个人都会，我就直接上代码：

```
//   获取map键值对个数  
        var size = function() {  
         return this.arr.length;  
        };  
       // 判断map是否为空    
        var isEmpty = function() {  
         return this.arr.length <= 0;  
        };  
```
-------------------------------------------

## 四、验证与总结
- 验证

一个方法有没有写对，最好的验证，就是实践出真知，下面我附上所有代码吧

```
    function Map(){  
        var struct = function(key, value) {  
         this.key = key;  
         this.value = value;  
        };  
       // 添加map键值对  
        var set = function(key, value){  
          for (var i = 0; i < this.arr.length; i++) {  
          if ( this.arr[i].key === key ) {  
           this.arr[i].value = value;  
           return;  
          }  
         };  
         this.arr[this.arr.length] = new struct(key, value);  
        };  
       //  根据key获取value   
        var get = function(key) {  
         for (var i = 0; i < this.arr.length; i++) {  
          if ( this.arr[i].key === key ) {  
           return this.arr[i].value;  
          }  
         }  
        return null;  
        };  
       //   根据key删除  
        var remove = function(key) {  
         var v;  
         for (var i = 0; i < this.arr.length; i++) {  
          v = this.arr.pop();  
          if ( v.key === key ) {  
           continue;  
          }  
          this.arr.unshift(v);  
         }  
        };  
       //   获取map键值对个数  
        var size = function() {  
         return this.arr.length;  
        };  
       // 判断map是否为空    
        var isEmpty = function() {  
         return this.arr.length <= 0;  
        };  
        this.arr = new Array();  
        this.get = get;  
        this.set = set;  
        this.remove = remove;  
        this.size = size;  
        this.isEmpty = isEmpty;  
       }

       var map=new Map();  
       map.set("xxyang",100);
       map.set("xxyang",90);
       map.set("xp","dz");
       console.log(map.get('xxyang'));//90
       console.log(map.get('xp')); //dz
       console.log(map.size());//2  
       map.remove("xxyang");
       console.log(map.size());//1  
       console.log(map.get("xxyang"));//null       
 
```
用`vscode`运行得到如下结果：

![](https://user-gold-cdn.xitu.io/2020/3/6/170adbd09d11a26a?w=680&h=128&f=png&s=7501)
结果无误，也可以覆盖。`Map`方法的简单实现就完成啦，看完文章你可以去试试其他方法的实现~
- 总结

1. Map 的键可以是任意值，包括函数、对象、基本类型。
2. Map 中的键值是有序的，因此，当对它进行遍历时，Map 对象是按插入的顺序返回键值。
3. Map 可直接进行迭代
4. Map 在涉及频繁增删键值对的场景下会有些性能优势。
5. 对于小白来说，挑选一个简单的方法来进行源码实现，真的是不错的选择，可以打破内心的恐惧，如果你也有这种恐惧，快去试试吧。手写源码，面试常考，虽然有许多大佬，也发表了相关文章，但是靠背是记不住的，还是要自己写写。

-----------------------
### 结束
 > 恭喜你看完这篇文章啦，如果有错误的话就麻烦大家给我指出来吧！觉得不错的话，来个👍鼓励一下，哈哈

### 参考文章
- [Map（来自MDN web docs）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)
