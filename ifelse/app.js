// let ans =Number(prompt("enter your!!"));

// //NaN === NaN  it give false : we can use only isNaN() function checking is given output is match the condition.
// if(isNaN(ans)){
//     console.log("Wrong Input!!")
// }
// else if(ans>=18){
//     console.log("you are able for voting.....");
// }
// else{
//     console.log("you are not able for voting.....")
// }


// shopping discount 
// let amount = Number(prompt("Enter the shopping amount!!"));
// let dis=0;

// if(amount>0 && amount<=5000){
//     console.log(amount);
// }
// else if(amount>5000 && amount<=7000){
//     // console.log(amount- Math.floor((5*amount)/100));
//     dis=5;
// }

// else if(amount>7000 && amount<=9000){
//     dis=10;
//     // console.log(amount - Math.floor((10*amount)/100));
// }

// else if(amount>=9000){
//     dis=20;
// }
// console.log("discount",`${dis}%`)
// console.log("Discount amount", Math.floor((dis*amount)/100));
// console.log("payable amount", amount - Math.floor((dis*amount)/100));



//Electricel bill

let unit = Number((prompt("enter elertricity unity")));
let amount = 0;
 
console.log("unit you spend in this month's",unit);

if(isNaN(unit)){
    console.log("Wrong Input");
}

if(unit>400){
   amount =(unit-400)*13;
   unit=400
}
if(unit>200 && unit <=400){
    amount += (unit-200)*8;
    unit=200;
}

if(unit>100 && unit<=200){
    amount += (unit-100)*6;
    unit=100;
}

if(unit>0 && unit<=100){
    amount +=(unit)*4;
    unit=0;
}

console.log("Payable amount",amount);
