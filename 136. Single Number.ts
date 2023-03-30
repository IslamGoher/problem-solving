function singleNumber(nums: number[]): number | undefined {
  while (nums.length > 0) {
    const lastNumber = nums.pop();
    const sameNumberIndex = nums.findIndex((el) => el === lastNumber);
    if (sameNumberIndex === -1) return lastNumber;
    nums.splice(sameNumberIndex, 1);
  }
};