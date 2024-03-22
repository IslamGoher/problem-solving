function isValid(s: string): boolean {
    const parentheses = {
        "[": "]",
        "{": "}",
        "(": ")",
    };
    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] in parentheses) stack.push(s[i]);
        else {
            const openBracket = stack[stack.length-1];
            if (parentheses[openBracket] !== s[i]) return false;
            stack.pop();
        }
    }
    
    return !stack.length;
};

// 0(n)

