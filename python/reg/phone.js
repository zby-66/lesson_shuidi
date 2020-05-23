// const phoneReg = /^1[35789]\d{9}/;//[表示范围] /匹配规则定义/  正则表达式   \d代表数字     只要满足了正则要求就可以匹配   ^严格校验开头  
//$严格校验结尾
// console.log(phoneReg.test('胡言美女的电话号码是：18279040000'));
// console.log(typeof phoneReg);



const phoneReg = /^1[35789]\d{9}$/;//[表示范围] /匹配规则定义/  正则表达式   \d代表数字     只要满足了正则要求就可以匹配   ^严格校验开头  $严格校验结尾
console.log(phoneReg.test('胡言美女的电话号码是：18279040000'));
console.log(typeof phoneReg);
console.log(/^\d{3}-\d{5,8}[0-9]/.test(''));