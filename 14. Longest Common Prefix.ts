function longestCommonPrefix(strs: string[]): string {
  if(strs.length === 0) return "";
  if(strs.length === 1) return strs[0];

  let commonPrefix = compareTwoStrings(strs[0], strs[1]);
  for (let i = 2; i < strs.length; i++) {
    commonPrefix = compareTwoStrings(commonPrefix, strs[i]);
  }

  return commonPrefix;
}

function compareTwoStrings(string1: string, string2: string): string {
  let commonPrefix = "";
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] === string2[i]) commonPrefix += string1[i];
    else break;
  }

  return commonPrefix;
}