function mySqrt(x: number): number {
  let counter = 0;
  let odd = 1;
  
  while (true) {
    let result = x - odd;
    
    if (result >=0 && result < odd+2) {
      counter++;
      break;
    }
    
    if (result < 0) break;
    
    odd += 2;
    counter++;
    x = result;
  }
  
  return counter;
};
