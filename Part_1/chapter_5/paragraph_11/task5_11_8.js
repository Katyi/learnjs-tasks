/* Напишите функцию formatDate(date), форматирующую date по следующему принципу:
Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00. */

function formatDate(date) {
  let monthDay = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let mseconds = new Date() - date;
  let seconds = Math.round(mseconds / 1000);
  let minutes = seconds / 60;
  let hours = minutes / 60;

  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  monthDay = monthDay < 10 ? '0' + monthDay : monthDay;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;

  if (seconds < 1) {
    return 'прямо сейчас';
  }
  else if (minutes < 1) {
    return `${seconds} сек. назад`
  }
  else if (hours < 1) {
    return `${minutes} мин. назад`
  }
  else {
    return `${monthDay}.${month}.${year} ${hour}:${minute}`
  }
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));
