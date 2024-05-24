var str = 'fgfggg';

console.log(str[0]);

// плохо писать прямо в прототипы базовых типов
Array.prototype.sort = function () {}
var t = [2, 1, 22];
t.sort()

console.log(t.sort())


function getStr () {
	let b = [].slice.call(arguments, 1).join(arguments[0])
  console.log(b)
}


getStr('*', '1', 'b', '1c')