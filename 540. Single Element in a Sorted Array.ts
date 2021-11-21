// O(log n) time and O(1) space
function singleNonDuplicate(nums: number[]): number {

  let num = 0;
  for(let i = 0; i < nums.length; i= i + 2) {
    if(i === nums.length - 1) {
      num =  nums[i];
      break;
    }
    
    else if(nums[i] !== nums[i+1]){
      num =  nums[i];
      break;
    }
  }

  return num;
};