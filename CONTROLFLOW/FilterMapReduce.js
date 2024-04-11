const numarray=[1,2,3,4,5,6,7,8,9]

const newnumber = numarray.filter((number)=>{
    return(
        number = number >4
    )
})

//console.log(newnumber);

//const newarray=[]

numarray.forEach((num)=>{
    if (num>4) {
        //newarray.push(num)
    }
})

//console.log(newarray)

const array = [10,20,30,40,50,60,70,80]

let newarray= array
            .map((num)=>num = num*2)
            .map((num)=>num=num+2)
            .filter((num)=> num>40)
//console.log(newarray);



// const newarray =array.map((number)=>{
//     return(
//         number = number +10
//     )
// })

//console.log(newarray);

const number =[1,2,3,4]

let accumulator=0;
const SumOfArrayNum= number.reduce(function (accumulator, currentvalue){
   console.log(`accumulator is ${accumulator} and  current value is ${currentvalue}`);
    return accumulator+currentvalue
    
},accumulator)

console.log(`Sum of total number of arrai is ${SumOfArrayNum}`)


