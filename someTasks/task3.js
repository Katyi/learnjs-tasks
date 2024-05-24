// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const maxProfit = (prices) => {
  let min = prices[0]
  let profit = 0
  const n = prices.length
  for (let i = 0; i < n; i++) {
    if (min > prices[i]) {
      min = prices[i]
    } else if (prices [i] - min > profit) {
      profit = prices [i] - min
    }
  }
  return profit
};

// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([7,6,4,3,1]));
// console.log(maxProfit([1,2]));
// console.log(maxProfit([2,4,1]));

// get all profits
const maxProfit1 = (prices) => {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    profit += Math.max(prices[i] - prices[i-1], 0)
  }
  return profit
};

// console.log(maxProfit1([7,1,5,3,6,4]));
// console.log(maxProfit1([1,2,3,4,5]));
// console.log(maxProfit1([7,6,4,3,1]));

// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array 
// represents your maximum jump length at that position.

const canJump = (nums) => {
    let target = nums.length - 1;
    
    for (let i = target; i >= 0; i--) {
      if (nums[i] + i >= target) {
        target = i
      }
    }
    if (target === 0) {
      return true
    }
    return false
};

const canJump1 = (nums) => {
  let target = 0;
  const n = nums.length;
  if (nums.length === 1) {
    // console.log(nums[0]);
    return true
  }
  for (let i = 0; i < n; i++) {
    if (i < n && i !==n-1 && nums[i] === 0) {
      // console.log(nums[i]);
      return false
    }
    if (i >= n-1) {
      console.log(nums[i]);
      i = nums[i] + i - 1
    }
  }
  return true
};

// console.log(canJump([2,3,1,1,4]))//true
// console.log(canJump([3,2,1,0,4]))//false
// console.log(canJump([3,2,1,6,4]))//true
// console.log(canJump([0]))//true
// console.log(canJump([2,0,0]))//true

console.log(canJump1([2,3,1,1,4]))
console.log(canJump1([3,2,1,0,4]))
console.log(canJump1([0]))
console.log(canJump1([2,0,0]))