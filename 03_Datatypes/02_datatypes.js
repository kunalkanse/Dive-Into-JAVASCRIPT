
"use strict" // treat all js code as newer version

let name = "Kunal" 
let age = 23; 
let isLoggedIn = true; 
let state = null; 

console.log(typeof "kunal");    // string
console.log(typeof age);    // number
console.log(typeof null);   // object
console.log(typeof undefined);  // undefined

/* 

primitive datatypes : 

    number => 2 to power 53
    bigint
    string => " "  , ' ' , ` `
    boolean => true/false
    null    => standalone value
    undefined => not initialized
    symbols => to make unique

*/


/*
Non primitives : 

    object  => datatype is object
    array  => datatype is object
    function  => datatype is object function
*/

const DC = ["Batman" , "Superman" , "wonder woman" , "flash" , "aquaman" ];

let obj = {
    name : "Kunal",
    age : 23,
}

let func = function() {
    console.log("Hello World");
}

// +-+-+-+-+-+-++-+-+-+-+--+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/*
    primitive datatypes allocate memory into stack
    gives duplicate value if passing to another variable
    changes affect to only that particular variable

    non-primitives datatypes allocate memory in Heap
    gives reference of original value if passing to another variable
    changes will affect to all variables

    // const DC = ["Batman" , "Superman" , "wonder woman" , "flash" , "aquaman" ];
    // const marvel = DC;
    // marvel.push("Kunal");

    // console.log(DC);
*/

