//immeditely invoked function expressions [IIFE]
(function oracle() {
    //this is a named iffe because it has a function name 
  console.log("connected to oracle");
})();

(  (name)=>{
    // this is simple iffe because this has a no name and only a arrow function
    console.log( `connected to ,${name}`);
})("monogo db");
