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

// let a = Number (prompt("Enter the your age"));
//with number function if we add some string then it will give NaN (not a number);
// console.log(typeof(a));
// console.log(a);

let i =11 ,j=22;
let k = i+j + i++ + j++ + ++i + ++j;
console.log("i=" + i);
console.log("j=" + j);
console.log("k=" + k);


console.log(Math.round(10.6));//11 round-up with nearest value
console.log(Math.floor(10.5));//10 down
console.log(Math.ceil(10.2));//11 up
console.log(Math.trunc(12.23));// 12 REMOVE after point part
console.log(Math.pow(2,2));//4 power of 2
console.log(Math.sqrt(4));// 2
console.log(Math.cbrt());
console.log(Math.abs(-15)); //convert negative value into positive value
console.log(Math.max(12,45,98));// find Max value
console.log(Math.min(12,10,5));// find min value
console.log(Math.random())//generate random number only 0 and 1 you can extend some logic
console.log(Math.trunc(Math.random()*9000)+100)// generate OTP System


let a = 15.0356614;
console.log(a.toFixed(2));