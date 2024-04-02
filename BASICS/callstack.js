function one(){
    console.log("one");
    two()
    three()
}
function two(){
    console.log("two");
    three()
}
function three(){
    console.log("three");
}

one();
two();
three();