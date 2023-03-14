/* Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
Сделайте два решения: с использованием цикла и через рекурсию. */

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// вариант с циклом
function printList(list) {
  let reverseList = [];
  while (list) {
    reverseList.push(list.value);
    list = list.next;
  }
  for (let i = reverseList.length; i >= 0 ; i--) {
    console.log(reverseList[i]);
  }
}

printList(list);

// вариант с рекурсией
function printList1(list) {
  if (list.next) printList1(list.next);
  console.log(list.value);
}

printList1(list);
