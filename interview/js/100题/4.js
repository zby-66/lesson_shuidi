const numbers = [1, 2, 3]

numbers[10] = 11; //带来什么后果长度增加到11，但是中间的没有赋值的都为undefined
console.log(numbers,numbers[3]);
