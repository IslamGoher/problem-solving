var romanToInt = function(s: string): number {
  let num = 0;

  interface R {
    [index: string]: any
  }

  const RomanNumbers: R = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
  };
  
  for(let i = 0; i < s.length; i++) {
      if(s[i] === "I") {
          if(s[i+1] === "V") {
              num += 4;
              i++;
              continue;
          }
          else if(s[i+1] === "X") {
              num += 9;
              i++;
              continue;
          }
          else {
              num += RomanNumbers[s[i]];
              continue;
          }
          
      }
      else if(s[i] === "X") {
          if(s[i+1] === "L") {
              num += 40;
              i++;
              continue;
          }
          else if(s[i+1] === "C") {
              num += 90;
              i++;
              continue;
          }
          else {
              num += RomanNumbers[s[i]];
              continue;
          }
      }
      else if(s[i] === "C") {
          if(s[i+1] === "D") {
              num += 400;
              i++;
              continue;
          }
          else if(s[i+1] === "M") {
              num += 900;
              i++;
              continue;
          }
          else {
              num += RomanNumbers[s[i]];
              continue;
          }
      }
      else {
          num += RomanNumbers[s[i]];
      }
  }
  
  return num;
};

console.log(romanToInt("MCMXCIV"));