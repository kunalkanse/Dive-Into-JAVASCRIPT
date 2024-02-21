
/////////////////////////////////////////////////////////////////////////////
// Higher Order function demonstration

const oneWord = function (str) {
    return (str.replace(/ /g, '_').toUpperCase());
}

const upperFirstWord = function (str) {
    const [firstName, ...other] = str.split(' ');
    return [firstName.toUpperCase(), ...other].join(' ');
}

// Higher order function
function transform(str, fn) { 
    const newStr = fn(str);
    return newStr;
}

const str1 = transform('kunal bhau kanse', oneWord);
console.log(`Transformed String by oneWord() is : ${str1}`);

const str2 = transform('kunal bhau kanse', upperFirstWord);
console.log(`Transformed String by upperFirstWord() is : ${str2}`);

//////////////////////////////////////////////////////////////////////////////
console.log();
///////////////////////////////////////////////////////////////////////////////
// The concept of callback functions is used many time in javascript functions
// for example we have forEach 

const greet = function () {
    console.log('Hii ');
}

const arr = ['akshay', 'chetan', 'anvesh', 'aayush'];
arr.forEach(greet);

///////////////////////////////////////////////////////////////////////////////
// most advantage of callback functions is it allow us to create abstraction.
// by hiding some code implementation.
// transform() function does not have any idea that how the string is transformed.
// 
