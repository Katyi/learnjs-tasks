/* В Европейских странах неделя начинается с понедельника(день номер 1), затем идёт вторник(номер 2) и так до воскресенья(номер 7). 
Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date. */

function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day;
}

let someDay = new Date(2023, 1, 27);
console.log(`Этот день был ${getLocalDay(someDay)}-й день недели`);
