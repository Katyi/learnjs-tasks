var string = 'Welcome to this Javascript Guide!';

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, '');

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, ' ');

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

console.log(reverseBySeparator(string, ''));

var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
arrayList.splice(arrayList.length, 1, 'D');
console.log(arrayList);
arrayList.splice(0, arrayList.length);
console.log(arrayList);

console.log(13 % 1);
console.log(13.5 % 1);

function modifyArray(arr, callback) {
  arr.push(100);
  callback();
  arr.push(200);
  console.log(arr);
}
var arr = [1, 2, 3, 4, 5];
modifyArray(arr, function () {
  console.log('array has been modified', arr);
});

var y = 1;
// var f = null;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
console.log(Boolean(function f() {}));

(function () {
  let a = b = 5;
  var d = c = 3;
  e = 1;
})();
console.log(b);
console.log(c);
// console.log(d); // error
// console.log(c); // error
console.log(e);

function giveMeX(showX) {
  if (showX) {
    var x = 5;
  }
  return x;
}

console.log(giveMeX(false));
console.log(giveMeX(true));


for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0)
}

const palindrome = (str) => {
  // turn the string to lowercase
  str = str.toLowerCase()
  // reverse input string and return the result of the
  // comparisong
  if (str === str.split('').reverse().join('')) {
    return "it is palindrome"
  } else {
    return 'it is not palindrome'
  }
}
console.log(palindrome('Anna'))
console.log(palindrome('Ura'))

const findVowels = str => {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++
    }
  }
  return count
}

console.log(findVowels('asasasasa'))