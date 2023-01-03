function facktorial(n) {
  let fact = n;
  if (n === 0) {
    fact = 1;
  } else {
    for (let i = 1; i < n; i++) {
      fact *= n - i;
    }
  }
  console.log(fact);
}
facktorial(0);
facktorial(1);
facktorial(10);
