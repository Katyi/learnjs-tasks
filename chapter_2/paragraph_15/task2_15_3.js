// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
  return a >= b ? b : a;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
