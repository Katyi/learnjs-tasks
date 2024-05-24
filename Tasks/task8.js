// 1. Given a string, reverse each word in the sentence
var string = "Welcome to this Javascript Guide!";
// var string = "";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

console.log(reverseBySeparator(string, " "))
console.log(reverseBySeparator(reverseBySeparator(string, ""), " "))

// 2. How to empty an array in JavaScript?
var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
arrayList = [];
console.log(arrayList)

var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
arrayList.length = 0;
console.log(arrayList)

var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
arrayList.splice(0, arrayList.length)
console.log(arrayList)

// 3. How would you check if a number is an integer?
const isInteger = (n) => {
  n % 1 > 0 ? console.log('decimal') : console.log('integer');
  console.log(n%1)
}

isInteger(3)
isInteger(-3)
isInteger(3.1)

//4. Please explain what a callback function is and give a simple example.
function modifyArray(arr, callback) { 
  arr.pop();
  callback();
  arr.shift();
  callback();
  arr.push(100);
  callback();
  arr.unshift(200)
  callback(); 
}

var arr = [1, 2, 3, 4, 5];
modifyArray(arr, ()=>console.log("The modified array: ", arr));


// 5. Given two strings, return true if they are anagrams of one another
var firstWord = "Mary";
var secondWord = "Army";
 
function isAnagram(first, second) {
  if (typeof(first) !== 'string' || typeof(second) !== 'string' || first.length !== second.length) return false;

  // For case insensitivity, change both words to lowercase. 
  var a = first.toLowerCase();
  var b = second.toLowerCase();
  // Sort the strings, and join the resulting array to a string. Compare the results 
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
  return a === b;

}

console.log(isAnagram(firstWord, secondWord));

// 6. What will be the output of the following code?
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);

// 7. What will the following code output?
(function() {
  var a = b = 5;
})();
console.log(b);

// 8. What will the following code output?

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}


// 9. Palindrome Problem
const isPalindrome = str => {
  // turn the string to lowercase
  str = str.toLowerCase()
  // reverse input string and return the result of the
  // comparisong
  return str === str.split('').reverse().join('')
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("Anna"))
console.log(isPalindrome("Tisch"))
console.log(isPalindrome("Juan"))

// 10. Find the Vowels
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

console.log(findVowels("array"))
console.log(findVowels("Alexandraaa"))