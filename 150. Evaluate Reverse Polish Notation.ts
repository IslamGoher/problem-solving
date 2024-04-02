function evalRPN(tokens: string[]): number {
    const operators = ["+", "-", "*", "/"];
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        if (operators.includes(tokens[i])) {
            const b = stack.pop();
            const a = stack.pop();
            const result = calculator(parseInt(a), parseInt(b), tokens[i]);
            if (result >= 0) stack.push(Math.floor(result));
            else stack.push(Math.ceil(result));
        }
        else stack.push(tokens[i]);
    }
    return stack[0];
};

function calculator(a: number, b: number, operator: string) {
    if (operator === "+") return a + b;
    else if (operator === "-") return a - b;
    else if (operator === "*") return a * b;
    else if (operator === "/") return a / b;
}

// O(n)
