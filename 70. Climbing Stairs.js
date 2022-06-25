function climbStairs(n) {
  if (n === 1) return 1;
  
  const compinationArray = new Array(n).fill(1);
  let output = 1;
  
  while (true) {
    if (compinationArray.length > 1) {
      // find the index of last one
      let indexOfLastOne;
      if (compinationArray[compinationArray.length -1] === 1)
        indexOfLastOne = compinationArray.length -1;
      else {
        // index of first (two)
        indexOfLastOne = compinationArray.findIndex(el => el === 2) - 1;
      }
      
      // convert last two ones into 2
      compinationArray.splice(indexOfLastOne-1, 2);
      compinationArray.push(2);
      
      // find number of two's
      const twos = compinationArray.filter(el => el === 2);
      
      // find compination number and add it to output variable
      const compinationNumber = compination(compinationArray.length, twos.length);
      output += compinationNumber;

      console.log(compinationArray);
      const ones = compinationArray.filter(el => el === 1);
      if (ones.length <= 1) break;
    }
    else break;
  }
  
  return output;
};

function compination (n, r) {
  const BINOMIAL_OF_N = binomial(n);
  const BINOMIAL_OF_R = binomial(r);
  const BINOMIAL_OF_N_MINUS_R = binomial(n-r);
  
  return BINOMIAL_OF_N / (BINOMIAL_OF_R * BINOMIAL_OF_N_MINUS_R);
}

function binomial(n) {
  let output = 1;
  if (n === 1) return output;
  for(let i = n; i > 0; i--) {
    output = output * i;
  }
  
  return output;
}
