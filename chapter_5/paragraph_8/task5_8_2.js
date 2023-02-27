/* Есть массив сообщений такой же, как и в предыдущем задании.
Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том,
когда сообщение было прочитано ?
В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату,
и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.
P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее. */

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
readMap.set(messages[1], new Date(2023, 2, 27));
readMap.set(messages[2], 'Something');
console.log(readMap.get(messages[0]));
console.log(readMap.get(messages[1]));
console.log(readMap.get(messages[2]));