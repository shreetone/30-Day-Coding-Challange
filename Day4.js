function day_four(arr1, arr2) {
    let m = arr1.length;
    let n = arr2.length;
    let i = m - 1;
    let j = 0;

    while (i >= 0 && j < n) {
        if (arr1[i] > arr2[j]) {
            let temp = arr1[i];
            arr1[i] = arr2[j];
            arr2[j] = temp;
            i--;
            j++;
        } else {
            break;
        }
    }
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
}

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
day_four(arr1, arr2);
console.log(arr1); 
console.log(arr2); 