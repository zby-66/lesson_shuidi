// queryURLParams：获取地址栏中问号传参的信息

// 'www.xxxxxxx.cn/?lx=1&name=…'
// 解析问号和井号后面的值，最后得到一个包含信息的对象

// {HASH: "video", lx: "1", name: "JS", from: "baidu"}

// 常规正则处理

(proto => {
	function queryURLParams() {
		let obj = {};
		this.replace(/([^?=&#]+)=([^?=&#]+)/g, (_, key, value) => obj[key] = value);
		this.replace(/#([^?=&#]+)/g, (_, hash) => obj['HASH'] = hash);
		return obj;
	}
	proto.queryURLParams = queryURLParams;
})(String.prototype);

console.log('http://www.xxxxxxx.cn/?lx=1&name=JS&from=baidu#video'.queryURLParams());

// 利用A标签内置方法

// 原理：利用a标签本身的内置属性

// 在JS中获取的A元素对象，包含很多内置属性，我们可以看到如下几个属性，存储对于HREF地址的解析：

// search:'?lx=1&name=JS&from=baidu',
// hash:'#video',
// host:'www.xxxxxxx.cn',
// ......



// 利用这些属性信息我们就可以轻松完成需求；


function queryURLParams(url) {
	// 1.创建A标签（A元素对象）来获取到问号参数和哈希值
	let link = document.createElement('a');
	link.href = url;
	let askText = link.search.substr(1),
		polText = link.hash.substr(1),
		obj = {};
	// 2.向对象中进行存储
	polText ? obj['HASH'] = polText : null;
	if (askText) {
		let arr = askText.split(/(?:&|=)/g); //=>同时按照两个字符来拆分：["lx", "1", "name", "JS", "from", "baidu"]
		for (let i = 0; i < arr.length; i += 2) {
			// console.log(arr[i], arr[i + 1]); 属性名和属性值
			obj[arr[i]] = arr[i + 1];
		}
	}
	return obj;
}
let result = queryURLParams('http://www.xxxxxxx.cn/?lx=1&name=JS&from=baidu#video');
console.log(result);

/* <a href="http://www.xxxxxxx.cn/?lx=1&name=JS&from=baidu#video" id="link">*/


// 利用字符串内置方法

// 原理：利用字符串indexOf检测索引位置，substring截取字符串，split按指定符号转为数组...等一系列的字符串内置方法完成需求；

function queryURLParams(url) {
	// 1.首选获取问号和井号后面的值
	let askIndex = url.indexOf('?'),
		polIndex = url.lastIndexOf('#');
	let askText = url.substring(askIndex + 1, polIndex),
		polText = url.substring(polIndex + 1);
	// console.log(askText, polText); //=>"lx=1&name=JS&from=baidu"  "video"

	// 2.把获取到的结果进行解析，最后拼成一个对象返回
	let obj = {};
	// 处理哈希值（井号后面的值）
	polText.length > 0 ? obj['HASH'] = polText : null;
	// 问号参数的处理
	if (askText) {
		// askText.split('&') =>["lx=1","name=JS","from=baidu"]
		askText.split('&').forEach(item => {
			// item：循环数组中的每一项
			let arr = item.split('='), //=>"lx=1" => ["lx",1]
				key = arr[0],
				value = arr[1];
			obj[key] = value;
		});
	}
	return obj;
}


// 另一种方法

function queryURLParams(url) {
	let askIndex = url.indexOf('?'),
		polIndex = url.lastIndexOf('#'),
		askText = '',
		polText = '';
	polIndex === -1 ? polIndex = url.length : null;
	polText = url.substring(polIndex + 1);
	if (askIndex > -1) {
		askText = url.substring(askIndex + 1, polIndex);
	}
	let obj = {};
	polText.length > 0 ? obj['HASH'] = polText : null;
	if (askText) {
		askText.split('&').forEach(item => {
			let arr = item.split('=');
			obj[arr[0]] = arr[1];
		});
	}
	return obj;
}
