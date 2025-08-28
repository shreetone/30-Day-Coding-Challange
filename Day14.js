function countSubstrings(s, k) {
    function atMostKDistinct(s, k) {
        if (k < 0) return 0;
        let n = s.length;
        let left = 0;
        let count = 0;
        let freq = new Array(26).fill(0);
        let distinct = 0;
        
        for (let right = 0; right < n; right++) {
            let charCode = s.charCodeAt(right) - 'a'.charCodeAt(0);
            if (freq[charCode] === 0) {
                distinct++;
            }
            freq[charCode]++;
            
            while (distinct > k) {
                let leftCharCode = s.charCodeAt(left) - 'a'.charCodeAt(0);
                freq[leftCharCode]--;
                if (freq[leftCharCode] === 0) {
                    distinct--;
                }
                left++;
            }
            count += right - left + 1;
        }
        return count;
    }
    
    if (k === 0) return 0;
    return atMostKDistinct(s, k) - atMostKDistinct(s, k-1);
}
console.log(countSubstrings("pqpqs", 2));