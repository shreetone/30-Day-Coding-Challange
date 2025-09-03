function primeFactorization  (n){
  const factors = [];
  let tempN = n;

  while (tempN % 2 === 0) {
    factors.push(2);
    tempN /= 2;
  }
  for (let i = 3; i * i <= tempN; i += 2) {
    while (tempN % i === 0) {
      factors.push(i);
      tempN /= i;
    }
  }
  if (tempN > 2) {
    factors.push(tempN);
  }

  return factors;
};
const n = 18;
const result = primeFactorization(n);
console.log(result);

