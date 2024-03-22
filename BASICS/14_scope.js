
// let a =2000 //global scope
// if(true){
//     let a =10
//     const b=20
//     var c= 300
//     //local scope
// }

// console.log(a)
// //console.log(b)
// console.log(c)

function one (){
    const name="Koushik"
    function two (){
        console.log(name);
        const course="javascript"
    }
    //console.log(course);
    two()
}
one()