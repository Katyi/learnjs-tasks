// Условие:
// На вход функции absentNumber подается массив с натуральными числами до n включительно, 
// числа неупорядочены и каждое число встречается по одному разу, кроме одного, оно отсутствует, 
// необходимо определить какое и вернуть его. Чтобы вычислительная сложность была O(n)
// https://codesandbox.io/s/m2-ru-forked-d04i2o?file=/src/index.js:64-424

function absentNumber(array) {
  let arrLength = array.length;
  if (arrLength === 0) {
    return 1;
  } else if (array[0] === 1 && arrLength === 1) {
    return 2;
  } else if (array[0] === 2 && arrLength === 1) {
    return 1;
  }

  let summRightArr = ((arrLength + 1) * (arrLength + 2)) / 2;
  let summArray = array.reduce((item, acc) => acc + item, 0);
  return summRightArr - summArray;
};

let arr = [5, 4, 2, 1];
console.log( 'Искомое число = ', absentNumber(arr));
