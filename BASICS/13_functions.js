function myName(){
    console.log("k");
    console.log("o");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("k");
}

//myName()

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }


// addTwoNumber(1,6) // we should always check the number that if it is a number o

// function addTwoNumber(number1,number2){
//     let result = number1+number2
//     return result
// }
// const result = addTwoNumber(9,2)
// console.log(result);

// function userLogin(username){
//     if(!username){
//         console.log("please enter a user name");
//         return
//     }
//     return`${username} is logged in successfully`
// }

// const name = userLogin()
//console.log(name);

function cartValueCalculator(...value){
    return value
}
console.log(cartValueCalculator(300,200,2000));
