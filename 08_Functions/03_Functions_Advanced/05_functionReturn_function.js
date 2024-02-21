
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const fun1 = greet('Hey')
const fun2 = greet('Hello')

fun1('kunal');  // Hey kunal
fun2('aditya');    // Hello aditya
////////////////////////////////////////////////////////////////////////////////////
greet('jay hari')('kunal sheth')    // jay hari kunal sheth
////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
// greet() function is returning inner function so we need varianle to 
// store the returned function

// when we return inner function outer function also comes along with its own environment. (lexical environment)
// That is why the value of greeting paramter also printing when we are caliing fun1() & fun2()
// This whole thing is happening due to CLOSURE.

// This technique actually usefull in functional programming


//////////////////////////////////////////////////////////////////////////////////
// function return in Arrow function

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr('Hey')('Arrow');