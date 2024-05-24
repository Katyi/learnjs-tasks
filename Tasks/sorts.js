// сортировка пузырьком
let m = [1, 7, 5, 13, 8, 1, 0, 100];
let max;
let count = m.length -1;

for (var i = 0; i < count; i++) {
  for (var j = 0; j < count - i; j++) {
      if (m[j] > m[j + 1]) {
          max = m[j];
          m[j] = m[j + 1];
          m[j + 1] = max;
      }
  }
}

// console.log(m)

// алгоритм быстрой сортировки 
const values = [2, 27, 14, 52, 31, 96, 73, 47, 22, 6];

function QuickSort(List) {
  if(List.length <= 1) {
    return List;
  }
  const pivot = List[List.length - 1];
  const leftList = [];
  const rightList = [];

   for (let i = 0; i < List.length - 1; i++) {
    if (List[i] < pivot) {
      leftList.push(List[i]);
    }
    else {
      rightList.push(List[i])
    }
  }

  console.log(leftList, pivot, rightList)
  return [...QuickSort(leftList), pivot, ...QuickSort(rightList)];

}

console.log(QuickSort(values));

