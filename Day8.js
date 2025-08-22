function reverseWords(s) {
    const words = s.trim().split(/\s+/);
    const reversedWords = words.reverse();
    return reversedWords.join(' ');
}
const inputStr = "the sky is blue";
const outputStr = reverseWords(inputStr);
console.log(outputStr);