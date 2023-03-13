/* Напишите функцию count(obj), которая возвращает количество свойств объекта:
Постарайтесь сделать код как можно короче.
P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные». */

function count(user) {
  return Object.keys(user).length;
}

let user = {
  name: 'John',
  surname: "Smith",
  age: 30,
  addres: 'NYC',
  email: 'JhonSmith@gmail.com',
  admin: true,
};

console.log(count(user));