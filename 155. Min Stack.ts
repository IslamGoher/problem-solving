class MinStack {
    public stack: number[] = []
    public minElements: number[] = [];
    constructor() {}

    push(val: number): void {
        this.stack.push(val);
        if (this.stack.length === 1) this.minElements.push(val);
        else if (this.getMin() >= val) this.minElements.push(val);
    }

    pop(): void {
        const lastElement = this.stack[this.stack.length - 1];
        this.stack.pop();
        if (lastElement === this.getMin()) this.minElements.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minElements[this.minElements.length - 1];
    }
}

// O(1)
