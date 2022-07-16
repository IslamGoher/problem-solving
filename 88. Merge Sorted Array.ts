function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // remove zeros from nums1 and nums2
  removeZeros(nums1, m);
  removeZeros(nums2, n);

  if (nums1.length === 0 && nums2.length !== 0) {
    nums1.push(...nums2);
    return;
  }

  let finalArray: number[] = [];

  while (true) {
    
    if (nums1.length === 0) {
      finalArray.push(...nums2);
      nums2.splice(0, nums2.length);
      break;
    }
    else if (nums2.length === 0) {
      finalArray.push(...nums1);
      nums1.splice(0, nums1.length);
      break;
    }

    if (nums1[0] < nums2[0]) {
      finalArray.push(nums1[0]);
      nums1.shift();
    }

    else if (nums2[0] < nums1[0]) {
      finalArray.push(nums2[0]);
      nums2.shift();
    }

    else if (nums1[0] === nums2[0]) {
      finalArray.push(nums1[0], nums2[0]);
      nums1.shift();
      nums2.shift();
    }
  }

  nums1.push(...finalArray);
}

function removeZeros(array: number[], n: number) {
  for (let i = array.length-1; i >= n; i--) {
    array.splice(i, 1);
  }
}

// time complexity: O(n + m)