

///////////////////////////////////////
// Regular Functions vs. Arrow Functions

var firstName = 'khashaba';

const kunal = {
    firstName: 'kunal',
    year: 2001,
    calcAge: function () {
        //console.log(this);   // Kunal object
        console.log(2023 - this.year);  // 22

        // Solution 1
        //const self = this; // assigned kunal object to self, cause function expre. refers to global object
        // const is20Plus = function () {
        //     console.log(self);  // Kunal object
        //     console.log(self.year >= 2001 && self.year <= 2023);    // true
        // };

        // Solution 2
        // in this case arrow function use its parents 'this'
        const is20Plus = () => {
            console.log(this);
            console.log(this.year >= 2001 && this.year <= 2023);
        };
        is20Plus();

        console.log();
        const test = function () {
            console.log(this);  // global object 
        }
        test();
    },

    greet: () => {
        //console.log(this);  // Global window Object
        console.log(`Hey ${this.firstName}`);   // Hey khashaba
    },
};
kunal.greet();
kunal.calcAge();

// arguments keyword
// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// addArrow(2, 5, 8);
