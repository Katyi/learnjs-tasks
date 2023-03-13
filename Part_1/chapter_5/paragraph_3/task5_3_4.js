/* Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.*/

function extractCurrencyValue(moneyValue) {
  let result = moneyValue.slice(1);
  return +result; 
}

console.log(extractCurrencyValue('$120'));
console.log(extractCurrencyValue('$1000000'));