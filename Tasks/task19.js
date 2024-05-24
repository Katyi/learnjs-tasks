/* Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Сделайте три варианта решения:
1. С использованием цикла.
2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
3. С использованием формулы арифметической прогрессии. */

// вариант с циклом
const sumTo = (n) => {
  let summ = 0;
  for (let i = 1; i <= n; i++) {
    summ = summ + i;
  }
  return summ;
}
console.log(sumTo(100));

// вариант с рекурсией
const sumTo1 = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n + sumTo1(n - 1);
  }
}
console.log(sumTo1(100));

// вариант с прогрессией
const sumTo2 = (n) => {
  summ = n * (n + 1) / 2;
  return summ;
}
console.log(sumTo2(100));


let sum1 = 101*50;
let arr = []
arr.length = 100;
for (let i = 0; i < arr.length; i++) {
  arr[i] = i + 1;
}
let sumArr = eval(arr.join('+'));
let res = sum1 - sumArr;

console.log(sumArr)

let arr2 = [ ...Array(100).keys() ].map( i => i+1);
let arr3 = [...Array(100)].map((_, i) => i+1);
let arr4 = Array(100).fill().map((_, i) => i+1);
let arr5 = Array.from(Array(100), (_, i) => i+1);
let arr6 = Array.from({ length: 100 }, (_, i) => i+1);

console.log(arr2)
// console.log(arr3)
// console.log(arr4)
// console.log(arr5)
// console.log(arr6)

const shuffle = (array) => { 
  return array.sort(() => Math.random() - 0.5); 
}; 

console.log(shuffle(arr2))