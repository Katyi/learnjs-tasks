// Сортировать в порядке по убыванию


const sortArr = (arr) => {
  arr.sort((a, b) => b - a);
  return arr;
}

let arr = [5, 2, 1, -10, 8];

sortArr(arr);
console.log(arr);
