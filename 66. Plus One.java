class Solution {
  public int[] plusOne(int[] digits) {
    int carry = 0;
    int lastIndex = digits.length - 1;
    int currentIndex = lastIndex;
    digits[currentIndex] += 1;

    do {
      digits[currentIndex] += carry;
      carry = 0;

      if (digits[currentIndex] > 9) {
        digits[currentIndex] = 0;
        carry = 1;
      }

      currentIndex -= 1;

    } while (carry == 1 && currentIndex >= 0);

    if (carry == 1) {
      int[] finalDigits = new int[digits.length + 1];
      finalDigits[0] = 1;
      return finalDigits;
    }

    return digits;
  }
}

// Big O:
//      best case: O(1)
//      average case: O(n/2)
//      worst case: O(n)
// faster than 100.00% of Java online submissions