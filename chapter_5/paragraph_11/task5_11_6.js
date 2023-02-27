// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

function getSecondsToday() {
  let nowTime = new Date();
  let day = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate());
  let milliseconds = nowTime - day;
  let seconds = Math.round(milliseconds / 1000);
  return seconds;
}

console.log(getSecondsToday());
