const rotate = (nums, k) => {
  // for (let i = 0; i < k; i++) {
  //     let last = nums.pop()
  //     nums.unshift(last)
  // }
  let n = nums.length;
  let arr = nums.splice(n-k, k)
  for (let i = k; i > 0; i--) {
      nums.unshift(arr[i-1])
  }
  return nums
};

// console.log(rotate([1,2,3,4,5,6,7], 3));

const rotate1 = (nums, k) => {
  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop())
  }
  return nums
};

// console.log(rotate1([1,2,3,4,5,6,7], 3));

const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end-- 
    console.log(arr);
  }
}

const rotate2 = (nums, k) => {
    let n = nums.length
    k %= n
    reverse(nums, 0 , n-1)
    reverse(nums, 0 , k-1)
    reverse(nums, k , n-1)
    return nums
};

console.log(rotate2([1,2,3,4,5,6,7], 3));