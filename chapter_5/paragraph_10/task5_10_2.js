/* Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение. */

function topSalary(salaries) {
  let maxSalary = 0;
  let maxSalaryName = null;
  for(const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxSalaryName = name;
    }
  }
  return maxSalaryName;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log('Top salary has', topSalary(salaries));

let salaries_1 = {
  "John": 300,
  "Pete": 300,
  "Mary": 250
};
console.log('Top salary has', topSalary(salaries_1));

let salaries_2 = {};
console.log('Top salary has', topSalary(salaries_2));
