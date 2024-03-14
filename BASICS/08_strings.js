const firstName ="koushik"
const lastName = "mondal"

//console.log(firstName+lastName); //this is outdated version we should not use it
console.log(`my first name is ${firstName} and my last name is ${lastName}`);
//this is newer version and this type is called string interpolation

console.log(firstName.charAt(2));
console.log(lastName.indexOf("n"));
console.log(firstName.substring(0,3));
console.log(firstName.slice(-5,1));

const school = "   FSN   "
console.log(school);
console.log(school.trim());
console.log(school.replace("FSN", 'SKM'));
console.log(school.includes("SKM"));
const name= "koushik"
console.log(name.split("-"));