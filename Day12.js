function isValid(s) {
    const stack = [];
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (bracketMap[char]) {
            stack.push(char);
        } 
        else {
            if (stack.length === 0) {
                return false;
            }
            const lastOpen = stack.pop();
            if (bracketMap[lastOpen] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(isValid("[{()}]"));