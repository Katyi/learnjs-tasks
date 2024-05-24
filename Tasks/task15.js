let str = 'А роза упала на лапу Азора';

console.log(str.slice(2))
console.log(str.slice(2,6))
console.log(str.slice(0,6))

// сортировка пузырьком
let m = [1, 7, 5, 13, 8, 1, 0, 100];
let max;
let count = m.length -1;

for (var i = 0; i < count; i++) {
  for (var j = 0; j < count - i; j++) {
      if (m[j] > m[j + 1]) {
          max = m[j];
          m[j] = m[j + 1];
          m[j + 1] = max;
      }
  }
}

console.log(m)

var arr = [
  {name: 'width', value: 10}, 
  {name: 'height', value: 20}
]

let obj = {};

arr.map(item => obj[item.name] = item.value)

console.log(obj)


function f() { console.log(this.x); }
var obj1 = {x: 'bar'};

f.call(obj1);
f.apply(obj1);
obj1.func = f;
obj1.func();
(function f() { console.log(this.x); }).bind(obj1)
f();
