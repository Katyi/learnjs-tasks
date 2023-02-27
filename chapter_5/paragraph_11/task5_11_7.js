// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
  let nowTime = new Date();
  let tomorrow = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate() + 1);
  let milliseconds = tomorrow - nowTime;
  let seconds = Math.round(milliseconds / 1000);
  return seconds;
}

console.log(getSecondsToTomorrow());
