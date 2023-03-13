/* Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
Напишите функцию printList(list), которая выводит элементы списка по одному.
Сделайте два варианта решения: используя цикл и через рекурсию. */

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

// вариант с циклом - этот вариант проще мне для восприятия
function printList(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

printList(list);

// вариант с рекурсией
function printList1(list) {
   console.log(list.value);
  if (list.next) printList1(list.next);
}

printList1(list);
