const fs = require('fs')
const util = require('util')

const fsreadDir = util.promisify(fs.opendir);

fsreadDir('./', {encoding: 'utf8'})
.then(dir => console.log(dir))

fs.readFile('./for-map.js', { encoding: 'utf8'}, (err, file) => {
    // console.log(file);
})

// const fsReadFile = util.promisify(fs.readFile);
//接受一个函数，（具有错误优先的回调风格的函数）
const fsReadFile = mypromisify(fs.readFile);

fsReadFile('./for-map.js', {encoding: 'utf8'})
.then(info => {
    console.log(info);
})

function mypromisify(func){

    return (...args) => {
        return new Promise((reslove, reject) =>{
            //文件读完？
            func(...args, (err, res) =>{
                if(err) reject(err)
                reslove(res);
            })
        })
    }
}

//1.接受一个函数，（具有错误优先的回调风格的函数）
//2. promisify(fs.opend)返回一个函数

function promisify2(func) {
    // 决定读文件还是读目录
    return (...args) => {
        func('./for-map.js')
    }
    
}