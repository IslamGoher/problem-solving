function topKFrequent(nums: number[], k: number): number[] {
  const numsCount = {};
  const result: number[] = [];
  nums.forEach(el => {
      numsCount[el] = (numsCount[el]) ? numsCount[el]+1 : 1;
  });

  for (let i = 0; i < k; i++) {
      let maxNumber: number | undefined = undefined;
      for (const key in numsCount) {
          if (maxNumber === undefined) maxNumber = parseInt(key);
          if (numsCount[maxNumber] < numsCount[key]) maxNumber = parseInt(key);
      }
      result.push(maxNumber!);
      delete numsCount[maxNumber!];
  }

  return result;
};
