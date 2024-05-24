hoistedFunc()
// notHoistedFunc()

function hoistedFunc(){
    console.log('I am hoisted')
}

var notHoistedFunc = function(){
    console.log('I will not be hoisted!')
}

console.log(null == undefined)
console.log(typeof 1n)
console.log(Number.isFinite("0"))