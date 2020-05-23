const TULING = require('tuling');

const aiTuling = new TULING({
    key: '290a2cd643144a58afbd1bc67a1d9db2'
});

// (async () => {
//     key: '290a2cd643144a58afbd1bc67a1d9db2'

// });
//箭头函数其实是匿名函数  函数要被运行要有函数名
// const func = () => {
//     console.log('arrow function')
// }
// console.log(func);
// func();

// 立即执行函数
(async () => {
    // 机器人
    // console.log('arrow function')
    const result = await aiTuling.send({
        userid:1,
        info:'今天的天气？',
        loc: '南昌市'    
    });
    console.log(result);
})()