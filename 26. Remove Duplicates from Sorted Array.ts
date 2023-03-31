function removeDuplicates(nums: (number | string)[]): number {
  const expectedNums: (number | string)[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === "_") break;
    while(true) {
      const currentElement = nums[i];
      const nextElement = nums[i+1];
      if(currentElement === nextElement) {
        nums.splice(i+1, 1);
        nums.push("_");
      } else {
        expectedNums.push(nums[i]);
        break;
      }
    }
  }

  const k = expectedNums.length;
  return k;
};