//const array =["koushik", "rahul", "mohit", "sumit"]
// console.log(array)
// console.log(array[1]);
// console.log(array.push("gagandeep"));
// console.log(array);
// console.log(array.pop())
// console.log(array)
// console.log(array.unshift("Gagandeep"))
// console.log(array);
// console.log(array.shift());
// console.log(array.includes("koushik"));
// console.log(array);
// console.log(array.indexOf("rahul"));

// const newArray = array.join()
// console.log(typeof newArray); // string 

const newArray = [1,2,3,4,5,6,7,8]
const sliceArray = newArray.slice(1,3) //last value would be excluded
// console.log(sliceArray);

const spliceArray = newArray.splice(1,3)//last value would be included and splice numbers would be removed from the actual array 
// console.log(spliceArray);
// console.log(newArray);


const marvel_heros= ["spiderman", "ironman", "thor"]
const dc_heros = ["uperman","flush", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_hero = [...marvel_heros,...dc_heros]
// console.log(all_hero);

const array = [1,2,3,4,[5,6,7],8,[9,[10,11]]]
// console.log(array);

const easy_access=array.flat(Infinity)
// console.log(easy_access);

