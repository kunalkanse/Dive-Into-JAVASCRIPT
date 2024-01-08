///////////////////////////////////////
// The Spread Operator (...)
// Unpack the element. [] or {}
/////////////////////////////////////////////////////////
const hotel = {
    name: 'annapurna bhojnalay',
    location: '3 hatti chaowk,Baramati',
    categories: ['maharashtrian', 'south', 'panjabi', 'chinease'],
    starterMenu: ['masala papad', 'manchurian', 'kabab', 'chicken lollypop'],
    mainMenu: ['chicken Thali', 'paneer masala', 'machhi thali', 'veg angara'],

    openingHours: {
        thursday: {
            open: 12,
            close: 12
        },
        friday: {
            open: 11,
            close: 23
        },
        saturday: {
            open: 10,
            close: 24
        }
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },
}
///////////////////////////////////////////////////////////

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [ 1, 2, 7, 8, 9 ]

const newArr = [1, 2, ...arr];  // using spread
console.log(newArr);    // [ 1, 2, 7, 8, 9 ]

console.log(...newArr); // 1 2 7 8 9
console.log(1, 2, 7, 8, 9);

/////////////////////////////////////////////////////////
console.log();
const newMenu = [...hotel.mainMenu, 'Gnocci'];
console.log(newMenu);
// ['chicken Thali','paneer masala','machhi thali','veg angara','Gnocci']

/////////////////////////////////////////////////////////
console.log();
// Copy array
const mainMenuCopy = [...hotel.mainMenu];

/////////////////////////////////////////////////////////
console.log();
// Join 2 arrays
const menu = [...hotel.starterMenu, ...hotel.mainMenu];
console.log(menu);

////////////////////////////////////////////////////////
console.log();
// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'kunal';
const letters = [...str, ' ', 'sk.'];
console.log(letters);   // ['k', 'u', 'n','a', 'l', ' ','sk.']
console.log(...str);    // k u n a l
// console.log(`${...str} kanse`);

////////////////////////////////////////////////////////
console.log();
////////////////////////////////////////////////////////

// Real-world example
const ingredients = [
    // prompt("Let's make pasta! Ingredient 1?"),
    // prompt('Ingredient 2?'),
    // prompt('Ingredient 3'),
];
console.log(ingredients);   // []

hotel.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
hotel.orderPasta(...ingredients);

//Here is your declicious pasta with undefined, undefined and undefined      
//Here is your declicious pasta with undefined, undefined and undefined 
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
// Objects
const newRestaurant = { foundedIn: 1998, ...hotel, founder: 'kunal kanse' };
console.log(newRestaurant);

/////////////////////////////////////////////////////////
console.log();
/////////////////////////////////////////////////////////

const restaurantCopy = { ...hotel };
restaurantCopy.name = 'venkys';
console.log(restaurantCopy.name);
console.log(hotel.name);

