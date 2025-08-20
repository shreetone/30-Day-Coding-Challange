function findSubarraysWithZeroSum(arr) {
    const prefixSumMap = {};
    let currentSum = 0;
    const result = [];
    prefixSumMap[0] = [-1];
    
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (prefixSumMap.hasOwnProperty(currentSum)) {
            for (const startIndex of prefixSumMap[currentSum]) {
                result.push([startIndex + 1, i]);
            }
            prefixSumMap[currentSum].push(i);
        } else {
            prefixSumMap[currentSum] = [i];
        }
    }
    return result;
}
const arr = [1, 2, -3, 3, -1, 2];
console.log(findSubarraysWithZeroSum(arr));