
///////////////////////////////////////////////////////
// Frist Class Functions & Higher Order fuctions

///////////////////////////////////////////////////////
// functions are treats as first-class citizens.
// That means Function are simply Values.
// Functions are just another type of Object.

///////////////////////////////////////////////////////////
// We can store function in Variables or object properties.
const add = (a, b) => a + b;

const obj = {
    data: 12,
    add: function () {
        return a + b;
    }
}

//////////////////////////////////////////////////////////
// we can also pass functions as arguments to other functions.  e.g. => eventListeners to dom objects

const close = function () {
    console.log('closing...!!!');
}
// document.getElementById('demo').addEventListener('click', close);

//////////////////////////////////////////////////////////
// we can also returns a function from another funcion

///////////////////////////////////////////////////////////////////////////////////
// as functions are objects. and many type of objects in javascript hava methods
// Like array methods. There are also function methods. So methods that we can call 
// on functions. bind() method is an example of that.