function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a: number, b: number) => a - b);
    const result: number[][] = [];

    for (let i = 0; i < nums.length-2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        let left = i+1;
        let right = nums.length-1;
        while (left < right) {
            if (left > i+1 && nums[left] === nums[left-1]) {
                left++;
                continue;
            }
            else if (right < nums.length-1 && nums[right] === nums[right+1]) {
                right--;
                continue;
            }
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
            }
            else if (sum < 0) left++;
            else if (sum > 0) right--;
        }
    }
    return result;
};

// O(n^2)
