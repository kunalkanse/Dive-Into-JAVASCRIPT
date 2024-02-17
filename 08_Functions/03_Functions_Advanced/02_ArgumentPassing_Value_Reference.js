
//////////////////////////////////////////////////////////
//Passing by value and pasing by reference


const flight = 'KSK56';

const passenger = {
    name: 'kunal kanse',
    passport: 123645798
}

const checIn = function (flightNum, passenger) {
    flightNum = 'LH989';
    passenger.name = 'mr.' + passenger.name;

    // if (passenger.passport === 123645798) {
    //     alert('Check in');
    // } else {
    //     alert('Wrong Passport...!!!');
    // }
}

checIn(flight, passenger);

//Passing by value
console.log(flight);    // Original value not changed

// passing by reference
console.log(passenger); // Original value changed
