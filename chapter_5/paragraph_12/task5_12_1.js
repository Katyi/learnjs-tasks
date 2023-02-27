// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};
console.log(user);
let jsonUser = JSON.stringify(user);
console.log(jsonUser);
let newUser = JSON.parse(jsonUser);
console.log(newUser);
