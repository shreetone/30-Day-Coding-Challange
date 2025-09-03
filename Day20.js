function sortStack(stack) {
    if (stack.length === 0) {
        return;
    }
    const temp = stack.pop();
    sortStack(stack);
    insertSorted(stack, temp);
}
function insertSorted(stack, element) {
    if (stack.length === 0 || element >= stack[stack.length - 1]) {
        stack.push(element);
    } else {
        const temp = stack.pop();
        insertSorted(stack, element);
        stack.push(temp);
    }
}
const stack = [3, 1, 4, 2];
console.log([...stack]);
sortStack(stack);
console.log(stack);