// // alert("Hello WORLD");
// let userInput = prompt();
// let userInput2 = prompt();
// userInput=parseInt(userInput);
// userInput2=parseInt(userInput2);
// alert(typeof(userInput))
// alert(userInput===userInput2 ? 1:0);
// const res=(userInput%2==0)?"even":"odd";
// console.log(res);
// for (let i = 1; i <= 10; ++i) {
//   document.write(i + " ");
// }
// const s = prompt();
// let ans = true;
// let j = 0;
// for (let i = s.length - 1; i >= s.length / 2; i--) {
//   if (s[i] != s[j]) {
//     ans = false;
//     break;
//   }
//   j++;
// }

// alert(ans);
const num = [1, 2, 3, 4, 5, 6, 7];
// for (let i = 0; i < num.length; i++) {
//   document.write(num[i] + " ");
// }
let userInput = prompt("Enter the number of elements :");
userInput = Number(userInput);
for (let i = 1; i <= userInput; i++) {
  let element = prompt("Enter Number " + i + ":");
  num.push(element);
}
for (let i = 0; i < num.length; i++) {
  document.write(num[i] + " ");
}
