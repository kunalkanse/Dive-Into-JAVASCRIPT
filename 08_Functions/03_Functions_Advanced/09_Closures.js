
//////////////////////////////////////////////////////////////////////
/*
 DEFINATION : 1 =>
 A closure is the combination of a function bundled together (enclosed)
 with references to its surrounding state (the lexical environment). 
 In other words, a closure gives you access to an outer function's scope 
 from an inner function. 
 Lexical scope is a concept in that determines the accessibility of variables and 
 functions within a program.
 So, The lexical environment is where the inner variable or functions access the data of parent. 
 
 DEFINATION : 2 =>
 A closure gives a function access to all the variables ot its parent
 function, even after that fucntion has returned. Tha function keeps a 
 reference to its outer scope, which preserves the scope chain throughout time.

 DEFINATION 3 =>
 A closure sure that a function does,t loose connection to variable that 
 existed at the function birth place

 DEFINATION 4 =>
 A closure like a backpack that function carries around wherever it goes. 
 This backpack has all the variables that were present in the environment
 where the function were created.

 */
////////////////////////////////////////////////////////////////////////////

// To understand Closures we must have good understanding of Executiona context, call stack & scope chain.
// because closure bring all these concepts together.
/////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// We dont create closure manually, it just happens automatically in certain situation

///////////////////////////////////////////////////////////////////////

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} Passengers`);
    }
}

const booking = secureBooking();
// secureBooking() will return the inner function, and it will be stored in 'booking' variable

booking();
booking();
booking();

// PROBLEM STATEMENT : 
// we might have question that how this booking() function is still able to access 
//'passengerCount' variable, as this variable is not even declareed inside 
//function that is returned by secureBooking()
// and that secureBooking() is not even running on the stack it is already poped 

////////////////////////////////////////////////////////////////////////
// So that what the closure does.
// we can say that closure makes a function remember all variables that existed at function birthplace.
// The secureBooking() is birthplace of returned function. 
//so it is able to remember all variables in its enviroment. 
// This Environment can be called as scope chain.

// This scope chain ia actually preserved through the closure

////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////



const g = function () {
    const a = 23;

    f = function () {
        console.log(a * 2);
    }
}


const h = function () {
    const b = 753;
    f = function () {
        console.log(b * 2);
    }
}

g();
f();

h();
f();
