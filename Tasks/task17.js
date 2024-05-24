let a;
// console.log(parseInt('abc'))
// console.log(parseInt(null))
// console.log(parseInt(undefined))
// console.log(parseInt(++a))
// console.log(parseInt({} * 10))
// console.log(parseInt('abc' - 2))
// console.log(parseInt(0 / 0))
// console.log(parseInt('10a' * 10))


// console.log(isNaN()) // true
// console.log(isNaN(undefined)) // true
// console.log(isNaN({})) // true
// console.log(isNaN(String('a'))) // true
// console.log(isNaN(() => { })) // true

// console.log(Number.isNaN()) // false
// console.log(Number.isNaN(undefined)) // fale
// console.log(Number.isNaN({})) // false
// console.log(Number.isNaN(String('a'))) // false
// console.log(Number.isNaN(() => { })) // false


// console.log(Array.isArray(5)) // false
// console.log(Array.isArray('')) // false
// console.log(Array.isArray()) // false
// console.log(Array.isArray(null)) // false
// console.log(Array.isArray( {length: 5 })) // false
// console.log(Array.isArray([])) // true

console.log(isNaN("j")) // не число
console.log(Array.isArray([7])) // массив
console.log(5&1) // 1 - нечетное
console.log(4&1) // четное