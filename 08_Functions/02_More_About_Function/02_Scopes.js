//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);

}

console.log(a); // 300
// console.log(b);  // ReferenceError: b is not defined
// console.log(c);

/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
 
function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))  // 6

function addone(num) {
    return num + 1
}

////////////////////////////////////////////////////
////////////////////////////////////////////////////

// console.log(addTwo(5));  // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2
}
