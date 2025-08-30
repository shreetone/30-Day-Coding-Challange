function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(n, m) {
    return (n * m) / gcd(n, m);
}
const N = 4;
const M = 6;
console.log(lcm(N, M));