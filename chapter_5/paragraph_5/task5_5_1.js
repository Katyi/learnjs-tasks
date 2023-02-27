/* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву. */

const camelize = (str) => {
  let result = str.split('-');
  result = result[0] + result.slice(1).map(item => item[0].toUpperCase()+ item.slice(1)).join('');
  return result;
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');
