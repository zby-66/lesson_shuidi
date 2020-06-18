//请把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]。
const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
const arr2 = ['A', 'B', 'C', 'D']
const ret = []
let tmp = arr2[0]
let j = 0
for (let i=0;i<arr1.length;i++) {
  if (tmp === arr1[i].charAt(0)){
    ret.push(arr1[i])
  }else {
    ret.push(tmp)
    ret.push(arr1[i])
    tmp=arr2[++j]
  }
   if(i===arr1.length-1){
      ret.push(tmp)
    }
}
console.log(ret)



let a1 =  ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
let a2 = ['A', 'B', 'C', 'D'].map((item) => {
  return item + 3
})

let a3 = [...a1, ...a2].sort().map((item) => {
  if(item.includes('3')){
    return item.split('')[0]
  }
  return item
})