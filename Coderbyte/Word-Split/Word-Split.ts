function ArrayChallenge(strArr: string[]): string { 

  // code goes here
  // set first element to variable
  let firstString = strArr[0];

  // split second element into array of strings
  const allWords = strArr[1].split(",");

  // iterate over first element
  for (let i = 0; i < firstString.length -1; i++) {
    // split the string
    let firstWord = firstString.slice(0, i+1);
    let secondWord = firstString.slice(i+1, firstString.length);

    let isFirstWordFounded = false;
    let isSecondWordFounded = false;

    // check if both words exists
    // if true return required string
    allWords.forEach((element) => {
      if (firstWord === element) isFirstWordFounded = true;
      else if (secondWord === element) isSecondWordFounded = true;
    });

    if(isFirstWordFounded && isSecondWordFounded) {
      return `${firstWord},${secondWord}`;
    }
  }
  
  // if string not found return "not possible"
  return "not possible";

}
   
// keep this function call here 
// @ts-ignore
console.log(ArrayChallenge(["himadam", "mid,red,don't,hi,ok,madam"]));