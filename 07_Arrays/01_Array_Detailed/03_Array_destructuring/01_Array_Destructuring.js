'use strict'

///////////////////////////////////////////////////////////
// Destructuring is a way of unpacking values from an
// array or objects into a seperate variables. 
// Breaking complex structures into smaller data structures like variables
///////////////////////////////////////////////////////////

const arr = [10, 20, 30];
const a = arr[0];
const b = arr[1];
const c = arr[2];

///////////////////////////////////
const [x, y, z] = arr;
console.log(x, y, z);   // 10 20 30 
////////////////////////////////////

/////////////////////////////////////////////////////////////
console.log();

const hotel = {
    name: 'annapurna bhojnalay',
    location: '3 hatti chaowk,Baramati',
    categories: ['maharashtrian', 'south', 'panjabi', 'chinease'],
    starterMenu: ['masala papad', 'manchurian', 'kabab', 'chicken lollypop'],
    mainMenu: ['chicken Thali', 'paneer masala', 'machhi thali', 'veg angara'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
}

const [first, second] = hotel.categories
console.log(first, second); // maharashtrian south
console.log();
let [first1, , second1] = hotel.categories  // skipping values
console.log(first1, second1); // maharashtrian panjabi

////////////////////////////////////////////////////////
// Swaping values

[first1, second1] = [second1, first1];
console.log(first1, second1);
/////////////////////////////////////////////////////////
// calling function inside object 

const [starter, mainMenu] = hotel.order(0, 1);
console.log(`\nEnjoy Your ${starter}, main course ${mainMenu} is cooking\n`);

///////////////////////////////////////////////////////////
console.log();
// destructuring nested arrays

const nestedArr = [2, 3, [4, 5]];
const [$1st, , [_1st, _2nd]] = nestedArr;
console.log($1st, _1st, _2nd);

//////////////////////////////////////////////////////////
// Default values

const [p, q, r = 46] = [23, 78];
console.log(p, q, r);   // 23 78 46
// if default value not given then => 23 78 undefined
