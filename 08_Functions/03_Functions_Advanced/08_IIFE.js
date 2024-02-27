
///////////////////////////////////////////////////////////////////////
// Imediate Invoke Function Expression is a function that is only executed once and then never again
// that is the function which disappears right after its called once.
// function name is optional in this type.

// This function type is we need in the async/await.


(function runOnce() {
    console.log("Hii 👋, I am IIFE With name");
    console.log("Good Bye...!!!");  // Good Bye...!!!
})();

// runOnce();  // error : runOnce is not defined

//////////////////////////////////////////////////////////////////////
(function (sad) {
    console.log(`\nHii 👋, I am IIFE without name ${sad}`);
})("😞");

//////////////////////////////////////////////////////////////////////

(() => {
    console.log("Hii 😏, I am Arrow IIFE");
})();