
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

    order: function (starterIndex, mainIndex) {
        return `You ordered ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]}\n`;
    }
}

//////////////////////////////////////////////////////////
// Optional Chaining 
/*
    the optional chaining operator (?.) takes the reference of its left property & checks is it exist. not null or not undefined (checks is it exist or not)
    If the result is either of these then check will stop and returns undefined.
    OtherWise the chain of access check will continue to final value
    */

////////////////////////////////////////////////////////
// without optional chaining
console.log();

console.log(hotel.openingHours.friday.open);    // 11
console.log(hotel.openingHours.mon);    // undefined

//console.log(hotel.openingHours.mon.open);
// Cannot read properties of undefined (reading 'open')

/////////////////////////////////////////////////////////
if (hotel.openingHours.mon) // undefined i.e false
{
    console.log(hotel.openingHours.mon.open);
}
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

console.log();
// With Optional chaining

//console.log(hotel.openingHours.monday.open);  // ERROR
console.log(hotel.openingHours.monday?.open);   // undefined
// Above statement state that only if 'monday' is exist,not nullor not undefined in object then only access 'open', else stop checking and return undefined


/////////////////////////////////////////////////////////
console.log();
//////////////////////////////////////////////////////////

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

for (const day of days) {
    hotel.openingHours[day]?.open ? console.log(`On ${day} hotel opens at ${hotel.openingHours[day].open}`) : console.log(`Holiday On ${day}`);
}

/*
    Holiday On monday
    Holiday On tuesday
    Holiday On wednesday
    On thursday hotel opens at 12
    On friday hotel opens at 11
    On saturday hotel opens at 10
    Holiday On sunday
*/

///////////////////////////////////////////////////////
// we can use optional chaining to check whether method present in object or not 
console.log();

const order = hotel.order?.(0, 1);

if (order) {
    console.log(order);
} else {
    console.log(`hotel OBJ does not contains order() method\n`);
}

/////////////////////////////////////////////////////////
// Optional chaining on arrays 
console.log();

// Arrays
const users = [{ name: 'kunal', email: 'kunalskanse@gmail.com' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');  // nullish coalesing 

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');