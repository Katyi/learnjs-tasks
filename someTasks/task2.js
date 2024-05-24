// Нужно проверить цепочку отрывающихся и закрывающихся скобок 
// Если после открывающей, закрывающая не того же вида, то проверка считается - false 
// Если все открытые имеют парное зарытие - true 


function checkBrackets(str) {
  let stak = [];
  const obj = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (let i = 0; i < str.length; i++) {
    if (['(', '{', '['].includes(str[i])) {
      stak.push(str[i]);
    } else if ([')', '}', ']'].includes(str[i])) {
      const last = stak.pop();
      if (str[i] !== obj[last]) {
        return false;
      }
    }
  }

  if (stak.length !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(checkBrackets('{some: [text], list: (56)}')); // true

console.log(checkBrackets('{some: [text}, list: (56)]')); // false

console.log(checkBrackets('(45+[89])')); // true

console.log(checkBrackets('[(]45+89)')); // false

console.log(checkBrackets('')); // true

console.log(checkBrackets('some text')); // true