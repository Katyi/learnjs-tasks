// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

function getLastDayOfMonth(year, month) {
  let day = new Date(year, month + 1, 0);
  let lastDay = day.getDate();
  return lastDay;
}

console.log( getLastDayOfMonth(2021, 1) );
console.log( getLastDayOfMonth(2022, 1) );
console.log( getLastDayOfMonth(2023, 1) );
console.log( getLastDayOfMonth(2024, 1) );
