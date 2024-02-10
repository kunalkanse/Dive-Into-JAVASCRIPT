const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        // {
        //     username: 'sam',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
    }

}

// user.welcomeMessage();  // hitesh , welcome to website
user.username = "sam"
user.welcomeMessage()    // sam , welcome to website

// console.log(this);   // this refers to window

/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function chai() {
//     let username = "hitesh"
//     console.log(this.username); // undefined : this refers to window
// }

// chai()

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const chai = function () {
    let username = "hitesh"
    console.log(this.username); // undefined
}

// const chai = () => {
//     let username = "hitesh"
//     console.log(this);  // window
// }


chai()

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2;  // returns 7

// const addTwo = (num1, num2) => (num1 + num2);  // returns 7

const addTwo = (num1, num2) => ({ username: "hitesh" }) // { username: 'hitesh' }


console.log(addTwo(3, 4))
