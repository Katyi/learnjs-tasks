/* Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
Функция должна надёжно работать при значении days=365 и больших значениях: */

function getDateAgo(date, days) {
  let newDay = new Date(date);
  newDay.setDate(date.getDate() - days);
  let result = newDay.getDate();
  return result;
}

let someDay = new Date(2015, 0, 2);

console.log(getDateAgo(someDay, 1));
console.log(getDateAgo(someDay, 2));
console.log(getDateAgo(someDay, 365));
