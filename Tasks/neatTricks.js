// 1. Shortening console.log
// var a = console.log.bind(document)
// console.log(a)
// a(3*4)
// a("Welcome to YourQuorum")
// a(true)

// Smart Function (Arrow fun)
function yourquorum(str){
  console.log(str)
}
// Arrow Functions
let yourquorum2 = (str) => { console.log(str) }
yourquorum("Sign in Yourquorum") 
yourquorum2("Create a question")

//deep flatten
var array = [100, [200, [300, 400, 500], 600], [700, 800,[900,[1000]]]]
console.log(array.flat(Infinity)) // [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

// Console.table
var data=[{"category":"Discussion"}, {"category":"Health"}, {"category":"Education"}]
console.table(data)


// Multiple Replace
const paragraph = "I think Ruth's dog is cuter than your dog!";
//Single
console.log(paragraph.replace('dog', 'cat'))
console.log(paragraph.replace(/dog/i, 'cat'))
//Multiple 
console.log(paragraph.replace(/dog/g, 'cat'))


// Number to String
var data1 = 200 
data1 = data1 + ""
console.log(data1) // 200
console.log(typeof(data1)) //String
// String to number
var data2 = "200"
data2 = +data2
console.log(data2)
console.log(typeof(data2)) //number

// Shuffle An Array
var array = [100, 200, 300];
console.log(array.sort(function() 
{
    return Math.random() - 0.5 
}));

// Get last element of Array
let arr = [100, 200, 300, 400, 500]
console.log(arr.slice(-1)) // [500]
console.log(arr.slice(-2)) // [400, 500]
console.log([arr[arr.length-1]])

let arr1 = [ 'a', 'b', 'b', 'a', 'b', 'c'];
let newArr = [... new Set(arr1)]
console.log(newArr)

let arr2 = [ 'a', 'b', 'b', 'a', 'b', 'c'];
let newArr1 = new Set(arr2)
let newArr2 = Array.from(newArr1)
console.log(newArr2) 