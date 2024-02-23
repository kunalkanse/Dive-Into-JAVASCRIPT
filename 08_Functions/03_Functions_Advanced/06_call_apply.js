
const airIndia = {
    airLine: 'Air India',
    iataCode: 'AI',
    bookings: [],

    //latest syntax
    book(flightNo, passenger) {
        console.log(`${passenger} booked a seat on ${this.airLine} Flight ${this.iataCode}${flightNo}`);

        this.bookings.push(({ flight: `${this.iataCode}${flightNo}`, passenger: passenger }))
    },     
};
 
airIndia.book(423, 'kunal kanse');
airIndia.book(356, 'aniket sapkal');
console.log(airIndia);

const euroWing = {
    airLine: 'EuroWing',
    iataCode: 'EW',
    bookings: [],
}


////////////////////////////////////////////////////////////////////////////
// below statment is just the assignment
// book method of airIndia object is assigned to the book variable .
// This book function is no longer mwthod of airIndia object
// it is now a seperate function.

const book = airIndia.book;

// This will be regular function call. So the 'this keyword present in method body will be refers to 'undefined' as it is regular function.
// in Strict mode , reguale function refers to undefined

//************************************************************************************* */
//book(978, 'sudesh gowda');// TypeError: Cannot read properties of undefined (reading 'push')
//************************************************************************************* */


////////////////////////////////////////////////////////////////////////////////
// So now how do we actually fix the problem. OR How we can tell javascript that
// we want to create new booking on the airIndia of euroWing.

// So, explicitely we can tell to javascript that what the that 'this' keyword 
// in method should be like.
// If we want to create booking at AirIndia them this should points to Air india, and for booking of EuroWing then this shouls point to EuroWing.

/////////////////////////////////////////////////////////////////////////////////
console.log();
// We have three methods for this problem : 
//      1) call     2) apply    3) bind

////////////////////////////////////////////////////////////////////////////////
// 1) call() : 
// call accepts object name , arguments ... n
book.call(euroWing, 423, 'omkar more'); // omkar more booked a seat on EuroWing Flight EW423
book.call(airIndia, 562, 'chetan ghodekar');    // chetan ghodekar booked a seat on Air India Flight AI562


console.log();
console.log(airIndia);
/*
{
  airLine: 'Air India',
  iataCode: 'AI',
  bookings: [
    { flight: 'AI423', passenger: 'kunal kanse' },
    { flight: 'AI356', passenger: 'aniket sapkal' },
    { flight: 'AI562', passenger: 'chetan ghodekar' }
  ],
  book: [Function: book]
}
*/


console.log();
console.log(euroWing);

/*
{
  airLine: 'EuroWing',
  iataCode: 'EW',
  bookings: [ { flight: 'EW423', passenger: 'omkar more' } ]
}
*/

////////////////////////////////////////////////////////////////////////////////////
// In call() methos we are passing object name and the argument that function accept
// we can use this call() method on normal function also to attach with any object.

// by passing object name in call() method we are actually telling to 'this' keyword to point that perticular object 
// call() is one of the function method

//////////////////////////////////////////////////////////////////////////////////
console.log();
///////////////////////////////////////////////////////////////////////////////////
// 2) apply() : 
// call accepts object name ,  [arguments array]

const swissAirLine = {
    airLine: 'Swiss Air',
    iataCode: 'SW',
    bookings: [],
}

const flightDetails1 = [165, 'Ayush Kshirsgar'];
const flightDetails2 = [312, 'Sudesh Gowda'];

book.apply(swissAirLine, flightDetails1);   // Ayush Kshirsgar booked a seat on Swiss Air Flight SW165
book.apply(swissAirLine, [312, 'Sudesh Gowda']) // Sudesh Gowda booked a seat on Swiss Air Flight SW312

console.log();
console.log(swissAirLine);

/*
{
  airLine: 'Swiss Air',
  iataCode: 'SW',
  bookings: [
    { flight: 'SW165', passenger: 'Ayush Kshirsgar' },
    { flight: 'SW312', passenger: 'Sudesh Gowda' }
  ]
}
*/

////////////////////////////////////////////////////////////////////////////////
// apply() is no more used in javascript cause we have better option for this as,

book.call(swissAirLine, ...flightDetails1); // Ayush Kshirsgar booked a seat on Swiss Air Flight SW165
