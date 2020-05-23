const arr = [ {age:10}, {age:20}]
//age*2
//回调改装reduce

let sum = arr.reduce((acc, cur)=> {
    return acc + cur.age
}, 0)
console.log(sum);

const newArr = arr.map(e => {
    return {
        ...e,
        age: e.age *2
    }
});
console.log(newArr);

//回调

function test(callback) {
    setTimeout(() => {
        callback('hello world')  
    }, 2000);
}

test(function(str){
    console.log(str);
})



Array.prototype.myMap = function(cb){
    let t = [];
    for(let i=0; i<this.length;i++){
        t.push(cb(this[i]));
    }
    return t
}

Array.prototype.myMap1 = function(cb){
    // let t = [];
    // for(let i=0; i<this.length;i++){
    //     t.push(cb(this[i]));
    // }
    // return t
    return this.reduce((acc, current) =>{
        let res = cb(current);
        return acc.concat(res);
    },[])
}


const newArr1 = arr.myMap1(e => {
    return {
        ...e,
        age: e.age *2
    }
});
console.log(newArr1);