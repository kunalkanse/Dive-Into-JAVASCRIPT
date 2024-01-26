
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

const kunal = ['kunal', 'kanse', '7387529448',
    'kanseks008@gmail.com', 2023 - 2001, ['savita', 'sharad'], true]


////////////////////////////////////////////////////
console.log('\n____Element other than strings____');
////////////////////////////////////////////////////
for (let index = 0; index < kunal.length; index++) {
    if (typeof kunal[index] === 'string') continue;

    console.log('\t', kunal[index], ' => ', typeof kunal[index]);
}

/*
____Element other than strings____
         22  =>  number
         [ 'savita', 'sharad' ]  =>  object
         true  =>  boolean

*/

////////////////////////////////////////////////////
console.log();
////////////////////////////////////////////////////
console.log('__break if Number type elements found__');
for (let index = 0; index < kunal.length; index++) {
    if (typeof kunal[index] === 'number') break;
    console.log('\t', kunal[index]);
}
/////////////////////////////////////////////////////
/*
__break if Number type elements found__
         kunal
         kanse
         7387529448
         kanseks008@gmail.com
 */

console.log();
/////////////////////////////////////////////////////
