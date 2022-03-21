function searchInsert(nums: number[], target: number): number {

  // check if array has only one element
  if (nums.length === 1) {
    if (nums[0] === target || nums[0] > target)
      return 0
    else return 1
  }

  let first = 0;
  let last = nums.length - 1;
  let mid = findMid(first, last);

  function index(first: number, last: number, mid: number): number {
    if (last - first === 1) {
      if (nums[first] === target || nums[first] > target)
        return first;
      else if (nums[last] === target || nums[last] > target)
        return last;
      else if (nums[last] < target)
        return last +1;
    }
  
    if (nums[mid] === target)
      return mid;
    else if (nums[mid] > target)
      last = mid;
    else if (nums[mid] < target)
      first = mid;
  
    mid = findMid(first, last);

    return index(first, last, mid);
  }

  return index(first, last, mid);
}

function findMid(first: number, last: number): number {
  return Math.ceil((last - first) / 2 + first);
}

// Big O: O(log n)
// Runtime: 68 ms, faster than 88.36% of TypeScript online submissions for Search Insert Position.
// Memory Usage: 44.9 MB, less than 23.67% of TypeScript online submissions for Search Insert Position.