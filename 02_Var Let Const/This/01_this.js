
console.log(this);  // Global Window object 

////////////////////////////////////////////////

function fun1() {
    console.log(this);
    // in sloppy mode refers to global object
    // in strict mode refers to undefined
}
fun1();

////////////////////////////////////////////////

const fun2 = () => {
    console.log(this);  // Global Window object 
}
fun2();

////////////////////////////////////////////////////
console.log();
////////////////////////////////////////////////////

const kunal = {
    firstName: 'Kunal',
    year: 2001,

    func: function () {
        console.log(this);
        // { firstName: 'Kunal', year: 23, func: [Function: func] }
        console.log('age : ', 2023 - this.year); //23
    }
}

kunal.func();

//////////////////////////////////////////////////
console.log();
//////////////////////////////////////////////////

const anotherKunal = {
    year: 2005
}
anotherKunal.func = kunal.func;
console.log(anotherKunal);  //{ year: 2001, func: [Function: func] }
anotherKunal.func();

///////////////////////////////////////////////////
console.log();

const f = kunal.func;
f();    // undefined/NAN (f is now normal function, does not attached to any object now)
