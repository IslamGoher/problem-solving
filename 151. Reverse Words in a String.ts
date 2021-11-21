// problem link: https://leetcode.com/problems/reverse-words-in-a-string
function reverseWords(s: string): string {

  // divid string to array
  let arr = s.split(' ');

  // remove spaces
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == '') {
      arr.splice(i,1);
      i--;
    }
  }
  
  // reverse an array
  // convert array to string
  return arr.reverse().join(" ");
}