```js
var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
```

 以下为个人猜想没有确切的理论依据：
 
  push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
 
 根据MDN的说法理解，`push`方法应该是根据数组的`length`来根据参数给数组创建一个下标为`length`的属性，我们可以做以下测试：
 ![image](https://user-images.githubusercontent.com/6418374/55369081-9c8bbd80-5527-11e9-82c6-10eb6f09e32e.png)
 
 根据这个测试我们发现，`push`方法影响了数组的`length`属性和对应下标的值。
 然后，正如楼上所说：
 
  在对象中加入splice属性方法，和length属性后。这个对象变成一个类数组。
 
 我们使用题目中的代码时得到了这个结果：
 ![image](https://user-images.githubusercontent.com/6418374/55369152-ebd1ee00-5527-11e9-9898-2c03edbe5d36.png)
 
 这个时候控制台输出的是一个数组，但是实际上它是一个伪数组，并没有数组的其他属性和方法，我们可以通过这种方法验证：
 ![image](https://user-images.githubusercontent.com/6418374/55369209-2045aa00-5528-11e9-824c-8798132e7c81.png)
 
 所以我认为题目的解释应该是：
 
 1. 使用第一次push，obj对象的push方法设置 `obj[2]=1;obj.length+=1`
 2. 使用第二次push，obj对象的push方法设置 `obj[3]=2;obj.length+=1`
 3. 使用console.log输出的时候，因为obj具有 length 属性和 splice 方法，故将其作为数组进行打印
 4. 打印时因为数组未设置下标为 0 1 处的值，故打印为empty，主动 obj[0] 获取为 undefined
 
 第一第二步还可以具体解释为：因为每次push只传入了一个参数，所以 obj.length 的长度只增加了 1。push方法本身还可以增加更多参数，详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

