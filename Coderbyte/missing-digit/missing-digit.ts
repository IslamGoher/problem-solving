function MathChallenge(str: string) {

  // code goes here
  // determine left and right hand side
  let sides = str.split(" = ");
  let leftHS = sides[0];
  let rightHS = sides[1];

  // case 1: x is inside right hand side
  if(rightHS.includes("x")) {

    // subcase 1.1: right hand side is equal x
    // example: "1 + 2 = x"
    if(rightHS === "x")
      return calculateStringEquation(leftHS);

    // subcase 1.2: right hand side is just contains x
    // example: "12 + 20 = 3x"
    else {

      // extract value of x from result
      // of left hand side equation
      let leftHSResult = calculateStringEquation(leftHS).toString();
      let indexOfX = rightHS.indexOf("x");
      return parseInt(leftHSResult[indexOfX]);
    }
  }
  
  // case 2: x is inside left hand side
  else {

    // extract numbers from and operator from rught HS
    let currentOperator = extractOperator(leftHS);
    let leftHSNmbers = leftHS.split(` ${currentOperator} `);
    let firstNumber = leftHSNmbers[0];
    let secondNumber = leftHSNmbers[1];

    // subcase 2.1
    // x is inside first number of left HS
    // example "x + 1 = 6"
    // example "1x5 * 1 = 195"
    if(firstNumber.includes("x")) {

      // calculate rightHS and secondNumber
      let result = calculateWithReverseOperator(
        parseInt(secondNumber),
        parseInt(rightHS),
        currentOperator!,
        "second"
      );

      let indexOfX = firstNumber.indexOf("x");
      return parseInt(result!.toString()[indexOfX]);
    }

    // subcase 2.2
    // x is inside second number of left HS
    // example: "9 - x = 5"
    // example: "14 / x = 2"
    else if (secondNumber.includes("x")) {

      // calculate rightHS and firstNumber
      let result = calculateWithReverseOperator(
        parseInt(firstNumber),
        parseInt(rightHS),
        currentOperator!,
        "first"
      );

      let indexOfX = secondNumber.indexOf("x");
      return parseInt(result!.toString()[indexOfX]);
    }

  }

}

interface Operations {
  [key: string]: any
}

// operations
const operations: Operations = {
  "-": (a: number, b: number) => a - b,
  "+": (a: number, b: number) => a + b,
  "*": (a: number, b: number) => a * b,
  "/": (a: number, b: number) => a / b
};

// return string that contains mathimatical opeartor
function extractOperator(str: string) {
  switch (true) {
    case str.includes("-"):
      return "-";
    case str.includes("+"):
      return "+";
    case str.includes("*"):
      return "*";
    case str.includes("/"):
      return "/";
  }
}

function calculateStringEquation(str: string): number {
  let currentOperator = extractOperator(str)!;

  // split to get the numbers
  let leftHSNmbers = str.split(` ${currentOperator} `);
  let firstNumber = parseInt(leftHSNmbers[0]);
  let secondNumber = parseInt(leftHSNmbers[1]);

  // calculate the numbers
  return operations[currentOperator](firstNumber, secondNumber);
}

function calculateWithReverseOperator(a: number, b: number, operator: string, number: string) {
  if(number === "second") {
    switch(operator) {
      case "+":
        return operations["-"](b, a);
      case "-":
        return operations["+"](b, a);
      case "*":
        return operations["/"](b, a);
      case "/":
        return operations["*"](b, a);
    }
  }

  else if (number === "first") {
    switch(operator) {
      case "+":
        return operations["-"](b, a);
      case "-":
        return operations["-"](a, b);
      case "*":
        return operations["/"](b, a);
      case "/":
        return operations["/"](a, b);
    }
  }
}

console.log(MathChallenge("19 + 1x = 31"));