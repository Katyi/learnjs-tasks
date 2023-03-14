/* Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».
В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this. */

function f(x) {
  console.log(x);
}

function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
f1000("test");
f1500("test");