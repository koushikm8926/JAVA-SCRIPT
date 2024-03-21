const student_data={
    name:'koushik',
    school:'Lovely professional University ',
    degree:'Bachelor Of Computer Application',
}

//console.table(student_data);
//console.log(student_data["name"])
const tinderUser={};
tinderUser.id ="123abc"
tinderUser.name="rahul"
tinderUser.isLoggedIn= true

//console.log(tinderUser);

const faceBook = {
    userName:{
        userFullName:{
            firstName:"koushik",
            lastName:"mondal"
        }
    }
}

//console.log(faceBook.userName.userFullName.firstName);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

//const obj3 = {obj1, obj2} this is not an efficent way to do 
const obj3= Object.assign({},obj1, obj2) //this is an efficent way to marge two objects
                                        //here empty parentasis refers to source and rest all are destination
const obj4= {...obj1,...obj2}   //sprade operations 
//console.log(obj4);  //both wiill retuen same output
//console.log(obj3);  //both wiill retuen same output

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));