function recursiveFibonacci(result) {
  let count = 2;
  let arr = [0, 1];
  function loop(result) {
    if (result <= count) {
      return;
    }
    arr[count] = arr[count - 2] + arr[count - 1];
    count++;
    loop(result);
  }
  loop(result);
  return arr[arr.length - 1];
}
console.log(recursiveFibonacci(10));
