import java.util.ArrayList;
import java.util.Collections;

class Solution {
  public int maxSubArray(int[] nums) {
    int subArrayLength = 2;
    int maxNum = Integer.MIN_VALUE;

    while (subArrayLength <= nums.length) {

      // itirate over array to find sub arrays sum
      for (int i = 0; i < nums.length - (subArrayLength - 1); i++) {

        // find sum of sub array
        int subArraySum = 0;
        for (int j = i; j < i + subArrayLength; j++) {
          subArraySum += nums[j];
        }
        if (subArraySum > maxNum)
          maxNum = subArraySum;
      }

      subArrayLength++;
    }

    // find max number of sums
    return maxNum;
  }
}

// big O: O(n^2)
// submission: Time Limit Exceeded
