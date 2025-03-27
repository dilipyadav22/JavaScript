// let a = 10;
// let b= 20;

// console.log("sum of 10 & 20 is",+ a+b);//"sum of 10 isa20 30 if (,) comma not include then it will give 1020
// console.log("sum of 10 & 20 is"  + (a+b));//"sum of 10 & 20 is 30"
// console.log("sum of 10 & 20 is", a+b)//"sum of 10 & 20 is 30
// console.log( a+b,"sum of 10 & 20 is")////"30 sum of 10 & 20 is"

// console.log("2"-1);/*  convert statement and show result of this. */
// console.log("5"*1);
// console.log("4"/2);


//prompt is a function it always give by default type of string. we can convert in to number using different methode
// let b = prompt("Enter the your age");

let a = Number (prompt("Enter the your age"));
//with number function if we add some string then it will give NaN (not a number);
console.log(typeof(a));
console.log(a);

let i =11 ,j=22;
let k = i+j + i++ + j++ + ++i + ++j;
console.log("i=" + i);
console.log("j=" + j);
console.log("k=" + k);
