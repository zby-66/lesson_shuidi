# 数组扁平化去重
> 已知如下数组：
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

```js
//1
Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>{ return a-b})

Array.prototype.flat= function() {
    return [].concat(...this.map(item => (Array.isArray(item) ? item.flat() : [item])));
}

Array.prototype.unique = function() {
    return [...new Set(this)]
}

const sort = (a, b) => a - b;

console.log(arr.flat().unique().sort(sort)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]

//2
arr.toString().split(",").sort((a,b)=>{ return a-b}).map(Number)
//3 推平
const flatArray = arr => arr.reduce((a,b) => a.concat(Array.isArray(b) ? flatArray(b): b), []);

//递归
function spreadArr(arr=[]){
	if(arr.some(ele=>Array.isArray(ele))){
		let newArr = [];
		arr.forEach((ele) => {
			if(Array.isArray(ele)){
				newArr = newArr.concat(...ele)
			}else{
				if(!newArr.includes(ele)) newArr.push(ele)
			}
		})
		return spreadArr(newArr);
	}
	return arr.sort((a,b)=> a-b);
}
spreadArr([ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]);
```
