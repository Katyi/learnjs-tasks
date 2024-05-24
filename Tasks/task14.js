
const randomInt = (max) => {
  return Math.floor(Math.random() * max);
}

let arr = new Array(100);
for (let i = 0; i < arr.length; i++) {
  arr[i] = i+1; 
}
console.log(arr)

let removeElem = randomInt(100)
console.log(removeElem)
arr.splice(removeElem-1, 1)


console.log(arr)

let arr1 = arr.reduce((item, acc) => acc + item, 0)
let number =  101*50 - arr1;
console.log(number) 