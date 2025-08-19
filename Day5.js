function findLeaders(arr) {
    const leaders = [];
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        let isLeader = true;
        for (let j = i + 1; j < n; j++) {
            if (arr[i] <= arr[j]) {
                isLeader = false;
                break;
            }
        }
        if (isLeader) {
            leaders.push(arr[i]);
        }
    }
    return leaders;
}
const arr = [16, 17, 4, 3, 5, 2];
console.log(findLeaders(arr));
