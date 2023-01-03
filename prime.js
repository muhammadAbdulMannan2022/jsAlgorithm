function prime(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && n > 1) {
      return "Prime";
    } else {
      continue;
    }
  }
  return "Not Prime";
}
console.log(prime(0));
console.log(prime(1));
console.log(prime(2));
console.log(prime(7));

//2
function prime2(n) {
  if (n < 2) {
    return "Not Prime";
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return "Prime";
    }
  }
  return "Not Prime";
}
// console.log(prime(0));
// console.log(prime(1));
// console.log(prime(2));
// console.log(prime(7));
