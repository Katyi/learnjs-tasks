/* Написать функцию/метод, который получает строку, которая состоит из английских букв (только строчные буквы) и цифр.
И делает следующее, разделяет на строку на буквы + цифры
32bk56c890f и производит следующие вычисления. Берет последовательно все буквы + цифры
(32) - если только цифры, то имеем аналогичное число - 32.
(bk56) - когда встречаем буквы, то имеем порядковый номер буквы в алфавите. b == 2, k == 11. Производим замену - получаем число 211 и умножаем его на число, собранное из цифр. 211 * 56
(c89) - аналогично получаем 3*890
(f) - если имеем только строку, то получаем просто число собранное из порядковых номеров букв. f == 6
По всем "парам" букв + цифр производится сложение / вычитание. Нечетные берутся со знаком "+", а четные берутся со знаком "-". Получаем:
32 - 211 * 56 + 3 * 890 - 6  = - 9120
Функция / метод вернет -9120 */

const findNumber = (str) => {
  let arr = str.split('');
  let newArr = [];
  let newStr = '';
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  for (let i = 0; i < arr.length; i++) {
    newStr = newStr + (arr[i]);
    if (!alphabet.includes(arr[i]) && alphabet.includes(arr[i+1])) {
      newArr.push(newStr);
      newStr = "";
    }
    if (i === arr.length - 1) {
      newArr.push(newStr);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    let arr1 = newArr[i].split('');
    let arr2 = arr1.filter(item => alphabet.includes(item)).flat();
    let arr4 = arr2.map(item => {
      return alphabet.findIndex(i=>item===i) + 1;
    });
    let arr5 = arr4.join('');
    let arr6 = [arr5].map(item=> item!=='' ? item : 1);

    let arr7 = arr1.filter(item => !alphabet.includes(item)).join('');
    let arr8 = [arr7].map(item=> item!=='' ? item : 1);
    newArr[i] = arr6 * arr8;
  }
  let summ = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (i !==0 && i%2 !== 0) {
      newArr[i] = newArr[i]*(-1);
    }
    summ += newArr[i];
  }
  return summ;
};

let str = '32bk56c890f';
console.log(findNumber(str));
