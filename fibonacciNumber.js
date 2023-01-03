// function fibo(n) {
//   if (n == 0) {
//     return 0;
//   } else if (n == 1) {
//     return 1;
//   } else {
//     return fibo(n - 2) + fibo(n - 1);
//   }
// }
// let arr = [];
// for (let i = 0; i < 10; i++) {
//   // Big O = O(n)   it's dependent on inputs in this case input is 10
//   arr.push(fibo(i));
// }
// console.log(arr);
//2
function fibo2(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    //Big O = O(n)   it's dependent on inputs in this case input is (n) from function parameter
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  console.log(arr);
}
fibo2(10);
