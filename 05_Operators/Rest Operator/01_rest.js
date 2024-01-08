
/////////////////////////////////////////////////////
// Rest Operator
// Pack the elements
/////////////////////////////////////////////////////

const hotel = {
    name: 'annapurna bhojnalay',
    location: '3 hatti chaowk,Baramati',
    categories: ['maharashtrian', 'south', 'panjabi', 'chinease'],
    starterMenu: ['masala_papad', 'manchurian', 'kabab', 'chicken_lollypop'],
    mainMenu: ['chicken_Thali', 'paneer_masala', 'machhi_thali', 'veg_angara'],

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

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
}
///////////////////////////////////////////////////////////////

const arr = [1, 2, ...[3, 4]];  // spread operator

const [a, b, ...rest] = [1, 2, 3, 4, 5];   // rest operator
console.log(a, b, rest);   //1 2 [ 3, 4, 5 ]

///////////////////////////////////////////////////////////
console.log();
const [chicken_Thali, , , veg_angara, ...others] = [...hotel.mainMenu, ...hotel.starterMenu];
console.log(chicken_Thali, '\n', veg_angara, '\n', others);

//////////////////////////////////////////////////////////
console.log();
// Rest Element must be the last element
/////////////////////////////////////////////////////////

// Rest on objects

const { saturday, ...weekdays } = hotel.openingHours;
console.log(weekdays);
// { thursday: { open: 12, close: 12 }, friday: { open: 11, close: 23 } }

////////////////////////////////////////////////////////
console.log();
// Rest operator in functions

function add(...values) //rest (packing) 
{
    let sum = 0;
    for (let index = 0; index < values.length; index++) {
        sum += values[index];
    }
    console.log(sum);
}

add(1, 2, 3, 4, 5)

const x = [4, 8, 6, 3];
add(...x);  // spread (unpacking)
////////////////////////////////////////////////////////

console.log();
hotel.orderPizza('paneer', 'onion', 'olives', 'spinch');