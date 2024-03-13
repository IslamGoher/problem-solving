function longestConsecutive(nums: number[]): number {
    const hash = {};
    nums.forEach(el => hash[el] = el);
    const allSequences: number[][] = [];
    for (const key in hash) {
        const val = hash[key];
        const seq: number[] = [val];

        for (let i = 1; i <= nums.length; i++) {
            const currentElement = val+i;
            if (!hash[currentElement]) break;
            seq.push(currentElement);
            delete hash[currentElement];
        }

        for (let i = 1; i <= nums.length; i++) {
            const currentElement = val-i;
            if (!hash[currentElement]) break;
            seq.unshift(currentElement);
            delete hash[currentElement];
        }

        allSequences.push(seq);
    }

    let longestConsecutive = 0;
    allSequences.forEach(el => {
        longestConsecutive = (el.length > longestConsecutive)
            ? el.length
            : longestConsecutive;
    });
    return longestConsecutive;
};

// O(n)
