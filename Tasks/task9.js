// console.log(!!null) // false
// console.log(!!undefined) // false

// console.log(Boolean(null)) // false
// console.log(Boolean(undefined)) // false


// let _thisIsUndefined
// const doNothing = () => {}
// const someObj = {
//     a: 'ay',
//     b: 'bee',
//     c: 'si'
// }
// console.log(_thisIsUndefined) // undefined
// console.log(doNothing()) // undefined
// console.log(someObj['d']) // undefined

// fs.readFile('path/to/file', (e, data) => {
//   console.log(e) // здесь мы получаем null
// if(e) {
//   console.log(e)
// }
//   console.log(data)
// })

console.log(null == undefined) // true
console.log(null === undefined) // false

// console.log(null || 1 || undefined) // 1
// console.log(null || 0 || false) // 1


// console.log(typeof(+"1"))
// console.log(2 + "1")
// console.log("2" + "1")
// console.log("2" + 1)
// console.log(+"2" + 1)
console.log(typeof 1n)
console.log(Number.isFinite(0))