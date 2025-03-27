// var n = 6;
//  function squre(num){
//     return num*num;
//  }

//  var squre2=  squre(n);
//  var squre3 = squre(4);

//  console.log(squre2);
//  console.log(squre3);


let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5,6,7];

let arrayIntegers1 = arrayIntegersOriginal1.slice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]

console.log(arrayIntegers1);
console.log(arrayIntegers2);
console.log(arrayIntegers3);
