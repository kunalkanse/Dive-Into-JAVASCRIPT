
// Dates & Time are little bit messy & confusing in javascript

// We can create date using 4 ways 
// In all ways we use constructor, but they can accept different paramters

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// 1)
const now = new Date();
console.log(now);   // Sat Feb 03 2024 13:17:00 GMT+0530 (India Standard Time)

// 2)
console.log(new Date('Feb 03 2024 13:17:00'));  // Sat Feb 03 2024 13:17:00 GMT+0530 (India Standard Time)

// 3)
console.log(new Date('December 24, 2015'))  // Thu Dec 24 2015 00: 00: 00 GMT + 0530(India Standard Time)

// 4) 
console.log(new Date(2023, 10, 05, 15, 23, 5)); // Sun Nov 05 2023 15:23:05 GMT+0530 (India Standard Time)

console.log();
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

const future = new Date(2023, 10, 05, 15, 23, 5);
console.log(future);
console.log(future.getFullYear());  // 2023
console.log(future.getMonth()); // 10
console.log(future.getDate());  // 5
console.log(future.getDay());   // 0 => sunday
console.log(future.getHours()); // 15
console.log(future.getMinutes());   // 23
console.log(future.getSeconds());   // 5
console.log(future.getTime());  // 1699177985000  => TimeStamp

console.log(future.toISOString());  // 2023-11-05T09:53:05.000Z

console.log(Date.now());    // 1706948336703
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
