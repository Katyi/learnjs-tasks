// глобальное пространство имен
var g = 'global'

function globalFunc() {
    function innerFunc() {
        console.log(g) // имеет доступ к переменной g, поскольку она является глобальной
    }
    innerFunc()
}

globalFunc()

function myFavouriteFunc(a) {
  if (true) {
      var b = 'Hello ' + a
  }
  return b
}
myFavouriteFunc('World')

// console.log(a) // Uncaught ReferenceError: a is not defined
// console.log(b) // не выполнится


function testBlock() {
  if (true) {
      var x = 7
      // let z = 5
  }
  return x
}

console.log(testBlock()) 
// console.log(z) // Uncaught ReferenceError: z is not defined


var variable1 = 'Comrades'
var variable2 = 'Sayonara'

function outer() {
    // внешняя область видимости
    var variable1 = 'World'

    function inner() {
        // внутренняя область видимости
        var variable2 = 'Hello'
        console.log(variable2 + ' ' + variable1)
    }
    inner()
}
outer()
// в консоль выводится 'Hello World',
// потому что variable2 = 'Hello' и variable1 = 'World' являются ближайшими
// к внутренней области видимости переменными


var globalVar = 'global'
var outerVar = 'outer'

function outerFunc(outerParam) {
    function innerFunc(innerParam) {
        console.log(globalVar, outerParam, innerParam)
    }
    return innerFunc
}

const x = outerFunc(outerVar)
outerVar = 'outer-2'
globalVar = 'guess'
x('inner')
