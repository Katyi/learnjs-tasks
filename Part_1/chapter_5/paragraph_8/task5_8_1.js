/* Есть массив сообщений.У вас есть к ним доступ, но управление этим массивом происходит где - то ещё.Добавляются новые сообщения и удаляются старые,
и вы не знаете в какой момент это может произойти.
Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано ?». 
Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.
P.S.Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.
P.P.S.Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства.Если сообщения принадлежат какому - то другому коду,
то это может привести к плохим последствиям. */

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let messagesRead = new WeakSet();

messagesRead.add(messages[0]);
messagesRead.add(messages[1]);
messagesRead.add(messages[0]);

console.log("Message 0 read: ", messagesRead.has(messages[0]));
console.log("Message 1 read: ", messagesRead.has(messages[1]));
console.log("Message 2 read: ", messagesRead.has(messages[2]));

let length = messages.length;
console.log(`You have ${length} messages`);
messages.shift();
length = messages.length;
console.log(`You have ${length} messages`);
