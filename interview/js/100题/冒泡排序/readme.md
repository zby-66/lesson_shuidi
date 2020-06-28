 时间复杂度： O(n^2)
 
 一般的冒泡：
 
```js
 function bubbleSort1(arr) {
 	for (let i = 0; i < arr.length - 1; i++) {
 		for (let j = 0; j < arr.length - 1; j++) {
 			if (arr[j]  >arr[j + 1]) {
 				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
 			}
 		}
 	}
 }
```
 
 这个存在的问题是，每次循环一次，后面就会多一段有序的数组，然而每次还是遍历了，是多余了
 
 优化一下这个问题 
 
 ```js
 function bubbleSort2(arr) {
 	// i是j需要遍历的次数，并不用i来遍历内容。
 	// 这样，每次会把上一次排过的数组滤过，只排列前面还没有排列的部分
 	// 每一次j就可以少遍历一次
 	for (let i = arr.length-1; i = 0; i--) {	
 		for (let j = 0; j < i; j++) {
 			if (arr[j] >arr[j + 1]) {
 				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
 			}
 		}
 	}
 }
 ```
 
 对于这个方案，还可以改进
 如果剩下的还没有排序的部分，本身就是有序的，也可以让遍历跳过，就又可以省下不少时间
 例如这种： `let a = [1, 2, 3, 4, 5, 6, 3, 11, 12, 9, 5, 8, 7, 23, 6, 8, 9];`
 
 ```js
 function bubbleSort3(arr) {
 	var swapedFlag;
 	for (var i = arr.length - 1; i >= 0; i--) {
 		swapedFlag = false;
 		for (var j = 0; j < i; j++) {
 			if (arr[j] >arr[j + 1]) {
 				swapedFlag = true;
 				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
 			}
 		}
 		// 如果j遍历，从头到尾都没有把swapedFlag置为true，就证明剩下的一段数组，本来就是按顺序的，就不用再遍历了
 		if (!swapedFlag) {
 			break;
 		}
 	}
 }
 ```

