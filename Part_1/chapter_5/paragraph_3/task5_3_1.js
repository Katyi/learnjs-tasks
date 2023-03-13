// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
  let result =str[0].toUpperCase()  + str.split('').splice(1, str.length-1).join('');
  return result
}

console.log(ucFirst('лондон'));
console.log(ucFirst('париж'));
console.log(ucFirst('москва'));