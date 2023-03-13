/* Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Сделайте три варианта решения:
1. С использованием цикла.
2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
3. С использованием формулы арифметической прогрессии. */

// вариант с циклом
const sumTo = (n) => {
  let summ = 0;
  for (let i = 1; i <= n; i++) {
    summ = summ + i;
  }
  return summ;
}
console.log(sumTo(100));

// вариант с рекурсией
const sumTo1 = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}
console.log(sumTo1(100));

// вариант с прогрессией
const sumTo2 = (n) => {
  summ = n * (n + 1) / 2;
  return summ;
}
console.log(sumTo2(100));
