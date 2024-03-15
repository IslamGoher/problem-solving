function isPalindrome(s: string): boolean {
    const regex = /[^a-zA-Z0-9]/g;
    const newString = s
        .replaceAll(regex, "")
        .toLowerCase();

    if (!newString || newString.length === 1) return true;
    for (let i = 0, j = newString.length - 1; i < j; i++, j--)
        if (newString[i] !== newString[j]) return false;
    return true;
};

// O(n/2) = O(n)

