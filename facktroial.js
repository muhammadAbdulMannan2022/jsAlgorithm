// 4! = 4*3*2*1
// 1
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
// 2
function facktorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * facktorial(n - 1);
  }
}
// console.log(facktorial(4));

// 3
function facktorial(n) {
  let result = n;
  if (n === 0 || n === 1) {
    result = 1;
  } else {
    while (n > 1) {
      result *= n - 1;
      n--;
    }
  }
  console.log(result);
}
facktorial(4);
