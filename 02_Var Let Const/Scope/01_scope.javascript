
'use strict'

function calcAge(birthYear) {
    const age = 2023 - birthYear;
    console.log(firstName);
    //console.log(lastName);  // ReferenceError:

    function printAge() {
        const out = `${firstName} you are ${age} old, Born in ${birthYear}`
        console.log(out);

        if (birthYear >= 2005 && birthYear <= 2023) {
            const firstName = 'shreyash'
            const str = `you are young, ${firstName}`   //JS Engine looks for current scope variable
            var young = true;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            console.log(add(2, 3)); // works
        }
        // console.log(str);    // cant access, const & let are block scoped
        console.log(young);
        //console.log(add(3, 4)); // cant access in STRICT mode
    }
    printAge()
    //console.log(young); // var is function scoped,accesible to only closest parent function
}

const firstName = 'kunal'   // accesible by calcAge()
calcAge(2005);
// calcAge(2001);
// console.log(age);    // cant Access
