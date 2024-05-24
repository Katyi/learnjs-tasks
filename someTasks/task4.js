// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal 
// substring
// consisting of non-space characters only.

const lengthOfLastWord = (s) => {
    return s.replace(/\s+/g, ' ').trim().split(" ").pop().length

};

// console.log(lengthOfLastWord("Hello world")); 
// console.log(lengthOfLastWord("   fly me   to   the moon  ")); 

// Given two strings needle and haystack, return the index of the first occurrence of needle 
// in haystack, or -1 if needle is not part of haystack.

const strStr = (haystack, needle) => {
  const n = haystack.length;
  const m = needle.length;
  for (let i = 0; i < n - n%m + 1; i++) {
    if (haystack.slice(i, i+m) === needle) {
      return i
    }
  }
  return -1
};

// console.log(strStr("sadbutsad", "sad"));
// console.log(strStr("leetcode", "leeto"));
// console.log(strStr("mississippi", "pi"));

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

const isPalindrome = (s) => {
    const nonAlphanumeric = '0123456789abcdefghijklmnopqrstuvwxyz';
    let newArr = s.toLowerCase().split("").filter(item => item !== " " && nonAlphanumeric.includes(item));
    let str = newArr.join("");
    let reversed = newArr.reverse().join("");
    return str === reversed
};

// console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('race a car'));

const isPalindrome1 = (s) => {
  var regex = /[^A-Za-z0-9]/g; 
  let str = s.toLowerCase().replace(regex, '');
  let reversed = str.split("").reverse().join("");
  console.log(str);
  console.log(reversed);
  return str === reversed
};

// console.log(isPalindrome1('A man, a plan, a canal: Panama'));
// console.log(isPalindrome1('race a car'));

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

const twoSum = (numbers, target) => {
  ind1 = 0
  ind2 = numbers.length - 1
  while (ind1 <= ind2) {
    if (numbers[ind1] + numbers[ind2] > target) {
      ind2--
    } else if (numbers[ind1] + numbers[ind2] < target) {
      ind1++
    } else {
      return [ind1+1, ind2+1]
    }
  }
};

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([2,3,4], 6));
// console.log(twoSum([-1,0], -1));

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const isAnagram = (s, t) => {
    let newS = s.split("").sort().join()
    let newT = t.split("").reverse().sort().join()
    return newS === newT
};

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));