/* Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N. */

function getAverageAge(users) {
  let result = users.reduce((acc, item) => acc + item.age, 0) / users.length;
  return result;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let users = [ vasya, petya, masha ];

console.log( getAverageAge(users) ); // (25 + 30 + 29) / 3 = 28
