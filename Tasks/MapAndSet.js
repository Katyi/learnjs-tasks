// Map
const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

console.log(myMap)
console.log(Array.from(myMap.keys()))
console.log(Array.from(myMap.values()))
console.log(Array.from(myMap.entries()).flat())

console.log(myMap.has(1))
console.log(myMap.get(1))
myMap.set(1, "num1");
console.log(Array.from(myMap.entries()))
myMap.set(4, "four");
console.log(Array.from(myMap.entries()))
myMap.delete(4)
console.log(Array.from(myMap.entries()))

// Set

const mySet = new Set(['one', 'two', 'three'])
console.log(mySet)