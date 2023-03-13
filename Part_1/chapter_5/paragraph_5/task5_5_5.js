// Скопировать и отсортировать массив

const copySorted = (arr) => {
  let result = arr.slice().sort();
  return result;
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log( sorted );
console.log(arr);
