const p =new Promise((res,rej)=>{
    setTimeout(()=>{

        res("Promise Resolved Successfully");
    },5000)
    //10000
})

const p2 =new Promise((res,rej)=>{
    setTimeout(()=>{

        res("Promise2 Resolved Successfully ");
    },10000)
    //5000 reverse case
})

async function getData(){
    console.log("helo World!! before await write");
   const data=  await p;
   console.log(" dilip yadav Async await")
   console.log(data);

   const data1=  await p2;
   console.log(" dilip yadav Async await p2")
   console.log(data1);
}

getData();

// without using Async await

// function handel(){
//     p.then ((res) => console.log(res));
//         console.log("dilip yadav old promise methode")

// }

// handel();

// output-:
//  dilip yadav
// Promise Resolves Successfully