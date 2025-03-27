
// // Using bind method do curring function
//  function multiply(x,y){
//     console.log(x*y);
// }

// let multiplytwo = multiply.bind(this ,2);
// multiplytwo(3)
// console.log(multiplytwo)

// let multiplymore =function(x,y){
//     console.log(x-y);

// }
// //3 is not take bcz in bind methode value alreday define
// let multiplythree = multiplymore.bind(this,10);
// multiplythree(3,5)


// // Using closer methode to do curring function

// let add = function  (a){
//     return function (b){
//         console.log(a + b);
//     }

// }


//   let addtwo = add(5);
//   addtwo(5)


//   function sum (a){
//     return function(b){
//         return a*b;
//     }
//   }
//   sum(50)(20);
//   console.log(sum(5)(20));

//   const userObj={
//     name:"dlip",
//     age:25
//   }

//   function userInfo(Obj){
//     return function(userdetails){
//             return Obj[userdetails]

//     }
//   }

//   let res = userInfo(userObj);
//   console.log(res('name'),res('age'));



//   // alert("Hello")
// //if we don't use semocolon";" befor this  brackets[]  all forEach operation not performed. and here JS Engine not add automatice  semi colone 
// // [1, 2].forEach(alert);


// let str="123";
// alert(typeof str);

// let num = Number(str);
// alert(typeof num);

// let value = true;
// alert(typeof value);

// let val= String(value);
// alert(typeof val);


for(var i=5; i<=9;i++){
  console.log(i);
}

console.log(+ true);
console.log(+ false);