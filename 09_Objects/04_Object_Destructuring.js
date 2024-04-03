
'use strict'

///////////////////////////////////////////////////////////
// Destructuring is a way of unpacking values from an
// array or objects into a seperate variables. 
// Breaking complex structures into smaller data structures like variables
///////////////////////////////////////////////////////////

console.log();

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

    // order: function (starterIndex, mainIndex) {
    //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // }

    // we can set default values for these variables,
    orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
        const OrderDetails = `Order Received..!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} O'clock \n`;

        return OrderDetails;
    }
}

///////////////////////////////////////////////////////////
// we use {} for object destructuring
// we have to provide variable names that exactly matches the object keys that we want to retrive
// This is most useful, especially when we deal with the 
// API calls, which basically means getting data from another application like whether data, movies data ets..
// This data is usually commes in the form of OBJECTS
//////////////////////////////////////////////////////////

const { name, categories, openingHours } = hotel;
console.log(name, '\n', categories, '\n', openingHours);

//////////////////////////////////////////////////////////
console.log();
// To assign different name to the keys =>
const { name: hotelName, categories: menuCat, openingHours: hours } = hotel;
console.log(hotelName, '\n', menuCat, '\n', hours);
//////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
console.log();
// we can assign default values to the variables ,
// In some cases the keys which are retrived are not present in object then it returns UNDEFINED,
// if keys is present then default value will not apply.
// To Avoid This we can assign them a default values.

const { menu = [], starterMenu: starters = [] } = hotel;
console.log(menu, '\n', starters);
//////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
console.log();
// Nested Objects destructuring

const { thursday, saturday } = hotel.openingHours;
console.log(thursday, '\n', saturday);

console.log();

const { friday: { open, close } } = hotel.openingHours;
//console.log(friday);  // err
console.log(`friday, hotel opens at ${open} O'clock \n`);
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
console.log();

const orderDetails = hotel.orderDelivery({
    time: '22:30',
    address: 'bhekrainagar, pune',
    mainIndex: 2,
    starterIndex: 1
});

console.log(orderDetails);
