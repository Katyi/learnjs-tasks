// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

const isSubsequence = (s, t) => {
  let newStr = '';
  let m = 0;
  let k = 0;
  for (let i = m; i < s.length; i++) {
    for (let j = k; j < t.length; j++) {
      if (s[i] === t[j]) {
        newStr = newStr + t[j];
        k = j;
        m = i;
        break;
      }
    }
    k++;
    m = i;
  }
  return newStr === s;
};

const isSubsequence1 = (s, t) => {
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[count] === t[i]) {
      count++;
    }
  }
  return count === s.length;
};

// console.log(isSubsequence1('abc', 'ahbgdc'));
// console.log(isSubsequence1('axc', 'ahbgdc'));
// console.log(isSubsequence1('ab', 'baab'));
// console.log(isSubsequence1('aaaaaa', 'bbaaaa'));

// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

const isHappy = (n) => {
  function summ(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i] * str[i]);
    }
    return sum;
  }
  let ind = [];
  while (true) {
    let sum = summ(n.toString());
    // console.log(sum);
    if (sum === 1) {
      return true;
    } else if (ind.includes(sum)) {
      return false;
    } else {
      n = sum.toString();
      ind.push(sum);
    }
    // console.log(ind);
  }
};

// console.log(isHappy(19))
// console.log(isHappy(2))

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

const canConstruct = (ransomNote, magazine) => {
  let newRansomNote = ransomNote.split('');
  let newMagazine = [];
  for (let i = 0; i < magazine.length; i++) {
    if (newRansomNote.includes(magazine[i])) {
      // let ind = newRansomNote.findIndex( item => item === magazine[i])
      newRansomNote.splice(
        newRansomNote.findIndex((item) => item === magazine[i]),
        1
      );

      newMagazine.push(magazine[i]);
    }
  }
  console.log(ransomNote);
  console.log(newMagazine.join(''));
  return ransomNote.split('').sort().join('') === newMagazine.sort().join('');
};

// console.log(canConstruct("a", "b"));
// console.log(canConstruct("aa", "ab"));
// console.log(canConstruct("aa", "aab"));
// console.log(canConstruct("aab", "baa"));

const canConstruct1 = (ransomNote, magazine) => {
  for (const letter of magazine) {
    ransomNote = ransomNote.replace(letter, '');
  }
  if (ransomNote.length === 0) {
    return true;
  } else return false;
};

// console.log(canConstruct1("a", "b"));
// console.log(canConstruct1("aa", "ab"));
// console.log(canConstruct1("aa", "aab"));
// console.log(canConstruct1("aab", "baa"));

// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

const isIsomorphic = (s, t) => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false;
    }
  }
  return true;
};

// console.log(isIsomorphic("egg", "add"));
// console.log(isIsomorphic("foo", "bar"));
// console.log(isIsomorphic("paper", "title"));

// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

const wordPattern = (pattern, s) => {
  let obj = {};
  let patt = pattern.split('');
  let arr = s.split(' ');
  console.log(patt);
  if (patt.length !== arr.length) {
    return false;
  }
  if ([...new Set(patt)].length !== [...new Set(arr)].length) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (obj[pattern[i]] && obj[pattern[i]] !== arr[i]) {
      return false;
    }
    obj[pattern[i]] = arr[i];
  }
  return true;
};

// console.log(wordPattern("abba", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog cat cat fish"));
// console.log(wordPattern("abba", "dog dog dog dog"));
// console.log(wordPattern("aba", "cat cat cat dog"));

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

const containsNearbyDuplicate = (nums, k) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j <= k + i && j < nums.length; j++) {
      console.log(nums[i], nums[j]);
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// console.log(containsNearbyDuplicate([1,2,3,1], 3));
// console.log(containsNearbyDuplicate([1,0,1,1], 1));
// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));

const containsNearbyDuplicate1 = (nums, k) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) {
      return true;
    } else map.set(nums[i], i);
  }
  return false;
};

// console.log(containsNearbyDuplicate1([1,2,3,1], 3));
// console.log(containsNearbyDuplicate1([1,0,1,1], 1));
// console.log(containsNearbyDuplicate1([1,2,3,1,2,3], 2));

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = (nums, target) => {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])]
    }
    map.set(nums[i], i)
  }
};

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// You are given a sorted unique integer array nums.
// A range [a,b] is the set of all integers from a to b (inclusive).
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
// Each range [a,b] in the list should be output as:
// "a->b" if a != b
// "a" if a == b

const summaryRanges = (nums) => {
  if (nums.length === 0) {
    return []
  }
  let ranges = [`${nums[0]}`]
  let rangesIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i-1]+1 !== nums[i]) {
      if (+ranges[rangesIndex] !== nums[i-1]) {
        ranges[rangesIndex] += `->${nums[i-1]}`
      }
      rangesIndex+=1
      ranges.push(`${nums[i]}`)
    }
  }
  if (+ranges[rangesIndex] !== nums[nums.length-1]) {
    ranges[rangesIndex] += `->${nums[nums.length-1]}`
  }
  return ranges
};

// console.log(summaryRanges([0,1,2,4,5,7]));
// console.log(summaryRanges([0,2,3,4,6,8,9]));
// console.log(summaryRanges([]));

// Given an array of intervals where intervals[i] = [starti, endi], 
// merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

const mergeOLD = (intervals) => {
  let newArr = []
  if (intervals.length===0) return newArr
  intervals = intervals.sort((a,b)=> a[0]-b[0])
  let temp = intervals[0]
  
  for (let i = 0; i < intervals.length; i++) {
    const [start1, end1] = temp
    const [start2, end2] = intervals[i]

    const min = Math.min(start1, start2)
    const max = Math.max(end1, end2)
    
    if (end1 >= start2) {
      temp = [min, max]
    } else {
      newArr.push(temp)
      temp = intervals[i]
    }
  }
  newArr.push(temp)
  return newArr
};
const merge = (intervals) => {
  let newArr = []
  if (intervals.length===0) return newArr
  intervals = intervals.sort((a,b)=> a[0]-b[0])
  let temp = intervals[0]
  
  for (let i = 0; i < intervals.length; i++) {
    const [start1, end1] = temp
    const [start2, end2] = intervals[i]

    const min = Math.min(start1, start2)
    const max = Math.max(end1, end2)
    
    if (end1 >= start2) {
      temp = [min, max]
    } else {
      newArr.push(temp)
      temp = intervals[i]
    }
  }
  newArr.push(temp)
  return newArr
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));
console.log(merge([[1,3]]));
console.log(merge([[1,4],[0,4]]));
console.log(merge([[1,4],[0,1]]));
console.log(merge([[1,4],[0,0]]));