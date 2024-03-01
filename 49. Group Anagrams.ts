function groupAnagrams(strs: string[]): string[][] {
  const result: {[index: string]: string[]} = {};
  for (const el of strs) {
      const sortedString = sortString(el);
      if (!result[sortedString]) result[sortedString] = [];
      result[sortedString].push(el);
  }
  return Object.values(result);
};

function sortString(str: string): string {
  return str.split("").sort().join("");
}
