function addBinary(a: string, b: string): string {

  let result = "";
  let carry = "0";

  const larger = (a.length >= b.length) ? a : b;
  let smaller = (a.length < b.length) ? a : b;

  const diffLength = larger.length - smaller.length;
  
  // make length of smaller string be equal to the larger string
  let diff = "0".repeat(diffLength);
  smaller = diff + smaller;

  for (let i = larger.length-1; i >= 0; i--) {
    const sumResult = sumBinaryWithCarry(larger[i], smaller[i], carry);
    result = sumResult.result + result;
    carry = sumResult.resultCarry;
  }

  if(carry === "1") {
    result = carry + result;
  }

  return result;
}

function sumBinaryWithCarry(
  firstDigit: string,
  secondDigit: string,
  carry: string
): SumCasesResult {
  let result = "0";
  let resultCarry = "0";

  if (firstDigit === "1" && secondDigit === "1" && carry === "1") {
    result = "1";
    resultCarry = "1";
  } else if (firstDigit === "0" && secondDigit === "0" && carry === "0") {
    result = "0";
    resultCarry = "0";
  } else if (
    (firstDigit === "0" && secondDigit === "1" && carry === "1") ||
    (firstDigit === "1" && secondDigit === "0" && carry === "1") ||
    (firstDigit === "1" && secondDigit === "1" && carry === "0")
  ) {
    result = "0";
    resultCarry = "1";
  } else {
    result = "1";
    resultCarry = "0";
  }

  return { result, resultCarry };
}

interface SumCasesResult {
  result: string;
  resultCarry: string;
}
