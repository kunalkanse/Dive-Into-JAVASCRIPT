
/////////////////////////////////////
// Primitive
let age = 30;
let oldAge = age;
age = 31;
console.log(age);  //31
console.log(oldAge);  // 30

////////////////////////////////////////////////////
// primitive datatypes allocate memory into stack.
// if one variable value passed to another variable
// changes affect to only that particular variable.
///////////////////////////////////////////////////
// Objects

const me = {
    name: 'Jonas',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);

/////////////////////////////////////
// Arrays

const DC = ["Batman", "Superman", "wonder woman", "flash", "aquaman"];

const marvel = DC;
marvel.push("Kunal");

console.log(DC);

//////////////////////////////////////////////////////////////////////////////////////////
// non-primitives datatypes allocate memory in Heap.
// gives reference of original value if passing to another variable
// changes will affect to both variables, because both references points to same data.
//////////////////////////////////////////////////////////////////////////////////////////
