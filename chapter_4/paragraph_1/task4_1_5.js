/* Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
P.S. Используйте typeof для проверки, что значение свойства числовое. */

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu) {
  for (let key in menu) {
    menu[key] = typeof(menu[key]) === "number" ? menu[key] * 2 : menu[key];
  }
  return menu;
}

console.log(multiplyNumeric(menu));

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };