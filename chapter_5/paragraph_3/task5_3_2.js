// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

function checkSpam(str) {
  let str1 = str.toLowerCase().includes('viagra');
  let str2 = str.toLowerCase().includes('xxx');
  return (str1 || str2); 
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));