//console.log(" Trying to print Table 5 ");
for (let index = 5; index <= 5; index++) {
    const element = index;
    //console.log(element);
    for (let i = 1; i <= 10; i++) {
        const element1 =i;
        //console.log(element*element1);
    }  
}

const myArray =["koushikl", "rahul", "mohit"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

for (let index = 1; index < 10; index++) {
    if(index == 6){
        //console.log("number reached 6");
        break;
    }
    //console.log(index);   
}
for (let index = 1; index < 10; index++) {
    if(index == 6){
       // console.log("number detected 6");
       continue;
    }
    //console.log(index); 
}

const name= "kouhsik mondal"

for (const iterator of name) {
    //console.log(iterator);
}

const array= [1,2,3,5,6,7,8,9]
for (const iterator of array) {
    console.log(iterator);
}