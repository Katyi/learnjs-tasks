/* Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
Сделайте два варианта решения.
Используя setInterval.
Используя рекурсивный setTimeout. */

// варинат с setInterval
function printNumbers(from, to) {
  let now = from;
  let timer = setInterval(function() {
    console.log(now);
    if (now === to) clearInterval(timer);
    now++;
  }, 1000);
}

// вариант с рекурсивным setTimeout
function printNumbers1(from, to) {
  let now = from;
  setTimeout(function go() {
    console.log(now);
    if (now < to) setTimeout(go, 1000);
    now++;
  }, 1000);
}

printNumbers(5, 10);
printNumbers1(5, 10);