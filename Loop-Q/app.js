
// Some of N natural number

// let pr = prompt("Give any Naturel Number");
// if(pr===null){
//     console.log("Canceled")
// }

// else{
//     let ans = Number(pr);


//     if(isNaN(ans)){
//         console.log("Given input is wrong");
    
//     }
//     else{
//         if(ans>0){
//             let sum=0;
//             for(let i =1; i<=ans ;i++){
//                 sum += i;
//             }
//             console.log("All Number of Sum",sum)
//         }
//         else{
//             console.log("Give number +ve and more than zero");
//         }
//     }
// }

//  Find the given number of factorical


let pr = prompt("Give Natural number");

if(pr===null){
    console.log("Canceled");
}
else{
    let n = Number(pr);
    if(n>0){
        let fact= 1;
        for(let i=1; i<=n;i++){
            fact = fact * i;
        }
        console.log(fact);
    }
    else{
        console.log("Give the number +ve and more than Zero");
    }
}

