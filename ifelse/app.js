let ans =Number(prompt("enter your!!"));

//NaN === NaN  it give false : we can use only isNaN() function checking is given output is match the condition.
if(isNaN(ans)){
    console.log("Wrong Input!!")
}
else if(ans>=18){
    console.log("you are able for voting.....");
}
else{
    console.log("you are not able for voting.....")
}


