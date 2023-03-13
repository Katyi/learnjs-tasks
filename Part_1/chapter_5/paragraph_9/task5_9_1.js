function sumSalaries(salaries) {
  let summ = 0;

  for (let item of Object.values(salaries)) {
    summ += item;
  }

  return summ;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(sumSalaries(salaries));