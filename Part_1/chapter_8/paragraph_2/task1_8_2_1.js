/* Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, 
но хотелось бы создать ещё один объект такого же типа.
Можем ли мы сделать так?
let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. 
И пример функции-конструктора, с которой такой код поведёт себя неправильно. */

// Правильный вариант
function User(name) {
  this.name = name;
}

// НепЫравильный вариант
function User1(name) {
  this.name = name;
}
User1.prototype = {};

let user = new User('John');
let user2 = new user.constructor('Pete');
console.log( user2.name );

user = new User1('John');
user2 = new user.constructor('Pete');
console.log( user2.name );
