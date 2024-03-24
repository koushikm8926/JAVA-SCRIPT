
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

// function one (){
//     const name="Koushik"
//     function two (){
//         console.log(name);
//         const course="javascript"
//     }
//     //console.log(course);
//     two()
// }
// one()

// console.log(one(5))

// function one(num){
//     return num+1
// }

// second(4)
// const second= function(num){
//     return num
// }

/**************************this keyword and object************************************************/

const userData={
    username:'koushik',
    massege:function(){
        console.log(`${this.username}, wellcome to the website`);
        // console.log(this);
    }
}

// console.log(userData.massege());
// userData.username="rahul"
// userData.massege()

// console.log(this);

// function randorm (){
//     const username = "koushik"
//     console.log(this.username);
// }

// randorm()

// const random =()=>{
//     let username="koushik"
//     console.log(this.username);
// }
// random()

// const addTwo=(num1,  num2)=>{
//     return num1+num2
// }


//implecit return
const addTwo=(num1,num2)=>num1+num2
console.log(addTwo(3,5));