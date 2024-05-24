var b = Buffer.from('arrayconnection:6');

var s = b.toString('base64');

// console.log(s)


let obj = {
  0: {"position": 5},
  1: {"position": 10}
}

let obj1 = Object.keys(obj).sort((a,b) => {
  return b.position-a.position
})

// console.log(obj)
// console.log(obj1)

let arr = ["Домоводство 2", "Домоводство 12", "САР1-5", "САР1-1"]
let nums = [12, 2, 1, 5 ]
let newArr = arr.sort()
let newNums = nums.sort((a,b) => a-b)
let newNums1 = nums.sort((a,b) => b-a)

console.log(newArr)
console.log(newNums)
console.log(newNums1)