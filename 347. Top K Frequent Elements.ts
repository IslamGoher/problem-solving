/*
// O(n log(n))
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
*/

// O(n)
function topKFrequent(nums: number[], k: number): number[] {
    let result: number[] = [];
    const frequency = new Array(nums.length);
    const numsCount = {};
    nums.forEach(el => {
        numsCount[el] = (numsCount[el]) ? numsCount[el]+1 : 1;
    });
    for (const key in numsCount) {
        const value = numsCount[key];
        if (frequency[value]) frequency[value].push(parseInt(key))
        else frequency[value] = [parseInt(key)];
    }
    for (let i = frequency.length; i > 0; i--) {
        if (result.length === k) break;
        if (frequency[i]) result = result.concat(frequency[i])
    }

    return result;
};
