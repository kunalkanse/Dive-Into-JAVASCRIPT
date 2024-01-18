
// const myArray = [0,1,2,3,4,5 , true , "Kunal"];

const myArray = [0, 1, 2, 3, 4, 5];
const myHeroes = new Array("kunal", "kanse")

console.log(myArray[0]);    // 0
console.log(myHeroes[1]);   // kanse

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

myHeroes.push("batman");    // Add elements at last
myHeroes.unshift("Superman")    // Add elements at first
console.log(myHeroes);  // [ 'Superman', 'kunal', 'kanse', 'batman' ]

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

myHeroes.splice(2, 1);   // remove No. of elements specified as 2nd paramater from index no. specified as 1st parameter
console.log(myHeroes);  // [ 'Superman', 'kunal', 'batman' ]

console.log(myArray.includes(4));   // true
console.log(myArray.indexOf(4));    // 4

console.log(myArray.includes(8));   // false
console.log(myArray.indexOf(8));    // -1

////////////////////////////////////////////////////////////////////////////////////
console.log("\n");
////////////////////////////////////////////////////////////////////////////////////

const arrToStr1 = myArray.join();
console.log(myArray);   // [ 0, 1, 2, 3, 4, 5 ]
console.log(arrToStr1); // 0,1,2,3,4,5
console.log(typeof arrToStr1);  // string

const arrToStr2 = myArray.join("");
console.log("\n" + arrToStr2);  // 012345

const arrToStr3 = myArray.join("-");
console.log("\n" + arrToStr3);  // 0-1-2-3-4-5

////////////////////////////////////////////////////////////////////////////////////
console.log("\n");
////////////////////////////////////////////////////////////////////////////////////
// Merging Arrays

const Marvel_Heroes = ["Thor", "Ironman", "Hulk"];
const DC_Heroes = ["Flash", "Batman", "Superman"];

//Marvel_Heroes.push(DC_Heroes);
//console.log(Marvel_Heroes);
// [ 'Thor', 'Ironman', 'Hulk', [ 'Flash', 'Batman', 'Superman' ] ]


//Marvel_Heroes.concat(DC_Heroes);
//console.log(Marvel_Heroes);
// [ 'Thor', 'Ironman', 'Hulk', [ 'Flash', 'Batman', 'Superman' ] ]

//console.log(Marvel_Heroes[3]);  // [ 'Flash', 'Batman', 'Superman' ]


//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Spread operator

const new_array = [...Marvel_Heroes, ...DC_Heroes];
console.log(new_array);     //[ 'Thor', 'Ironman', 'Hulk', 'Flash', 'Batman', 'Superman' ]


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

const nested_arrays = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const array_flat = nested_arrays.flat(Infinity);

console.log(array_flat);



console.log("\n" + Array.isArray(array_flat));  // true
console.log(Array.from("Kunal Kanse"));// ['K', 'u', 'n', 'a','l', ' ', 'K', 'a','n', 's', 'e']

console.log(Array.from({ name: "kunal" }));  // []
// returns empty array cause it cannot decide for whom to make array either for keys or values so we have to specify it.

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));    // [ 100, 200, 300 ]
