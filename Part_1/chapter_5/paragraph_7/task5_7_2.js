/* Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм. */

function aclean(arr) {
  let map = new Map();
  for (let item of arr) {
    let sortItem = item.toLowerCase().split("").sort().join("");
    map.set(sortItem, item);
  }
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );
