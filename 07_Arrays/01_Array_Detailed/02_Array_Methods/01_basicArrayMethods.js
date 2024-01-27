
/////////////////////////////////////////////////////////////////
// ? Methods are basically functions that are used on arrays
// ? Arrays themseleves are also objects.
// ? These function are attache dwith all array objects that we create. 

/////////////////////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

/////////////////////////////////////////////////////////////////
// ! slice() : does not change original array
console.log(arr.slice(2));  // [ 'c', 'd', 'e']
console.log(arr.slice(2, 4));   // [ 'c', 'd' ]
console.log(arr.slice(-2)); // [ 'd', 'e' ]
console.log(arr.slice(-1)); // [ 'e' ]
console.log(arr.slice(1, -2));  // [ 'b', 'c' ]
console.log(arr.slice());   // [ 'a', 'b', 'c', 'd', 'e' ]
console.log([...arr]);  // [ 'a', 'b', 'c', 'd', 'e' ]

///////////////////////////////////////////////////////////////////////////
// ! splice() : similar to slice(), difference is this method made changes in array.

// arr.splice(startIndex , deleteCount)
// console.log(arr.splice(1, 2));  // [ 'b', 'c' ]
// console.log(arr);   // [ 'a', 'd', 'e' ]

// console.log(arr.splice(2)); // ['c', 'd', 'e' ]
// console.log(arr);   // [ 'a', 'b' ]

// console.log(arr.splice(-1));    // [ 'e' ]
// console.log(arr);   // [ 'a', 'b', 'c', 'd' ]

///////////////////////////////////////////////////////////////
// ! reverse() : made changes in original array

let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // [ 'f', 'g', 'h', 'i', 'j' ]

//////////////////////////////////////////////////////////////
// ! concate() 

let alphas = arr.concat(arr2);  // ['a', 'b', 'c', 'd','e', 'f', 'g', 'h','i', 'j' ]
console.log(alphas);

////////////////////////////////////////////////////////////////
// ! join()

console.log(alphas.join("-"));  // a-b-c-d-e-f-g-h-i-j

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// How To Differentiate Array Methods
/////////////////////////////////////////////////////////////////
/*
1) Methods that can mutate the original array
        // ADD TO ORIGINAL
        1. push()
        2. unshift()

        // REMOVE FROM ORIGINAL
        3. pop()
        4. shift()

        // OTHERS
        5. reverse()
        6. sort()
        7. fill()

/////////////////////////////////////////////////////////////

2) Returns new Array
        1. map()
        2. filter()
        3. slice()
        4. concat()
        5. flat()
        6. flatMap()

3) Array Index
        1. indexOf()    // based on value
        2. findIndex()  // based on test condition

4) Array element
        1. find()   // based on test condition

5) know if array includes
        1. includes()
        2. some()
        3. every()

6) convert array to String
        1. join()

7) array to single value
        1. reduce

8) loop array
        1. forEach()
*/
