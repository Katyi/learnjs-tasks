// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, 
// which is XX + V + II. Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, 
// the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. 
// There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

var intToRomanOld = function(N) {
    let ans = ""
    for (let i = 0; N; i++) {
      while (N >= val[i]) {
        ans += rom[i]
        N -= val[i]
        console.log(ans);
      }
    }
    return ans
};

var intToRoman = function(num) {
  //create the list..
  const M = ["", "M", "MM", "MMM"];
  const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  //return solution with this procedure...
  return M[Math.floor(num / 1000)] + C[Math.floor((num % 1000) / 100)] + X[Math.floor((num % 100) / 10)] + I[num % 10];
};

// console.log(intToRoman(7900));

// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. 
// The returned string should only have a single space separating the words. Do not include any extra spaces.

const reverseWords = (s) => {
  let arr = s.split(" ").reverse().filter(item => item !== "").join(" ")
  return arr
};

// console.log(reverseWords("the sky is blue"))
// console.log(reverseWords("  hello  world  "))

// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.
// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

var hIndex = function(citations) {
  citations.sort((a,b) => b-a)
  let h = 0;
  while (citations[h] > h) h++
  return h;
};

// console.log(hIndex([3,0,6,1,5]))
// console.log(hIndex([1,3,1]))
// console.log(hIndex([100]))
// console.log(hIndex([0]))
// console.log(hIndex([0, 1]))
// console.log(hIndex([11,15]))

// Implement the RandomizedSet class:
// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

const productExceptSelf = function(nums) {
  let zeroCount = nums.reduce((acc, curr) => curr === 0 ? acc + 1 : acc, 0)
  let arrWithoutZero = nums.filter(item => item !==0)
  let totalProd = arrWithoutZero.slice(1).reduce((acc, curr) => acc*curr, arrWithoutZero[0])

  if (zeroCount > 1) return nums.map(item => 0)

  if (zeroCount === 1) {
    return nums.map(item => item === 0 ? totalProd : 0)
  } else {
    return nums.map(item => totalProd / item)
  }  
};

// console.log(productExceptSelf([1,2,3,4]))
// console.log(productExceptSelf([-1,1,0,-3,3]));
// console.log(productExceptSelf([0,0]));


// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and 
// intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any 
// overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion. Note that you don't need to modify intervals in-place. You can make a new array and return it.

var insert = function(intervals, newInterval) {
  const result = [];
  let [first, second] = newInterval;
  let pushed = false;

  for (const [start, end] of intervals) {
    if (end < first) {
      result.push([start, end]);
    } else if (start > second) {
      if (!pushed) result.push([first, second]);
      pushed = true;
      result.push([start, end]);
    } else {
      first = Math.min(start, first);
      second = Math.max(end, second);
    }
  }

  if (!pushed) result.push([first, second])
  return result;
};

// console.log(insert([[1,3],[6,9]], [2,5]));
// console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var groupAnagrams = function(strs) {
  let angs = new Map();
  for (const item of strs) {
    let sortItem = item.split("").sort().join("")
    if (!angs.has(sortItem)) {
      angs.set(sortItem, [])
    }
    angs.get(sortItem).push(item)
  }
  return Array.from(angs.values());
};

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
// console.log(groupAnagrams([""]))
// console.log(groupAnagrams(["a"]))

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

var longestConsecutive = function(nums) {
  let set = new Set(nums)
  let res = 0 
  for (const num of nums) {
    if (!set.has(num - 1)) {
      let temp = num
      count = 0
      while (set.has(temp++)) {
        count++
        res = Math.max(count, res)
      }
    }
  }
  return res
};



// console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([1,3,2,2]));
// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
// console.log(longestConsecutive([]));
// console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]));