function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];
  let pre = 1;
  let post = 1;

  result[0] = pre;
  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i - 1] * pre;
    pre = result[i];
  }

  result[nums.length - 1] *= post;
  for (let i = nums.length - 2; i >= 0; i--) {
    post *= nums[i + 1];
    result[i] *= post;
  }
  return result;
}

// O(n)
