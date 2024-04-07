const userEmail = []

// if (userEmail) {
//     console.log("User email got ");
// }
// else{
//     console.log("user dont haveany mail");
// }

//falsy values = false ,0, -0, bigint 0n, "" , null, undefined , NaN
//truthy value = "false", "0", " ", [], {}, function(){}

//how to check array 
//  if (userEmail.length === 0) {
//     console.log("array is empty");
//  }

// how to check object
const rollnumber ={}
if (Object.keys(rollnumber).length === 0 ) {
    //console.log("object is empty");
}

//nullish coalescing operator (??) : null undefined 
//let val1 = 10;
let val1 = null ?? 5
 let val2 = undefined ?? 10
console.log(val1);
console.log(val2);
let val3 = null ?? 20 ?? 30 
console.log(val3);