/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму. */

const getMaxSubSum = (arr) => {
  let maxSubSum = 0;
  let subSum = 0;

  for (let i = 0; i < arr.length; i++) {
    subSum = subSum + arr[i];
    if (subSum > maxSubSum) maxSubSum = subSum;
    if (subSum < 0) subSum = 0;
  }
  return maxSubSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
