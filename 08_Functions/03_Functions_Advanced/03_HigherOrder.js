
/////////////////////////////////////////////////////////////////////////////
// Higher Order Functions : 

// A function that receive another function as an arguments, OR the function that 
//returns a new function or both.
// We can create Higher order function only because javascript supports first order function


////////////////////////////////////////////////////////////////////////////

// we can pass functions as arguments to other functions. 
// The function which passed as a argument is called callback function AND
// The function Which accept this function as parameter is Hoghr Order function

// e.g. => close() is a callback function.
// e.g. => addEventListeners() is higher order function.

const close = function () {
    console.log('closing...!!!');
}
document.getElementById('demo').addEventListener('click', close);

////////////////////////////////////////////////////////////////////////////
// close() function is called as callback function because it will be called later
// by higher order function.
// addEvwntListener will call close() method as soon as click event happens. 


//////////////////////////////////////////////////////////////////////////////////
// we can also hava function that returns another function.
// here count() is higher order function and it have returned function.

function count() {
    let counter = 96;
    return function () {
        counter++;
    };
};
