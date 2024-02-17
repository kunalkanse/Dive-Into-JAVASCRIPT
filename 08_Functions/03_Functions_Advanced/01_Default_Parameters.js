
'use strict'

const bookings = [];

const CreateBooking = function (flightNo, noOfPassegers = 1, price = 3000) {

    // Object of bookings details
    const booking = {
        flightNo,
        noOfPassegers,
        price
    };

    console.log(booking);
    bookings.push(booking)  // push object into array
}

CreateBooking('LH123'); //  { flightNo: 'LH123', noOfPassegers: 1, price: 3000 }
CreateBooking('KG545', 5);  // { flightNo: 'KG545', noOfPassegers: 5, price: 3000 }
CreateBooking('RIP98', 21, 4500)    // { flightNo: 'RIP98', noOfPassegers: 21, price: 4500 }

CreateBooking('MF69', 2000, 12) // { flightNo: 'MF69', noOfPassegers: 2000, price: 12 }

CreateBooking('BC66', undefined, 5400)  // { flightNo: 'BC66', noOfPassegers: 1, price: 5400 }

console.log(bookings);

/*
[
  { flightNo: 'LH123', noOfPassegers: 1, price: 3000 },
  { flightNo: 'KG545', noOfPassegers: 5, price: 3000 },
  { flightNo: 'RIP98', noOfPassegers: 21, price: 4500 },
  { flightNo: 'MF69', noOfPassegers: 2000, price: 12 },
  { flightNo: 'BC66', noOfPassegers: 1, price: 5400 }
]
*/
