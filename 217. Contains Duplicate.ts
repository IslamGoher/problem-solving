function containsDuplicate(nums: number[]): boolean {
  const numsCount = {};
  for (let i = 0; i < nums.length; i++) {
    if (!numsCount[`${nums[i]}`]) numsCount[`${nums[i]}`] = 1;
    else return true;
  }
  return false;
}
