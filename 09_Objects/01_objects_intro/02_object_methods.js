

let emp = {
    eName: "ramesh",
    eId: 45,
    eCompany: "Accenture",
    ePlace: "Mankarwadi"
}

// Object.freeze(emp)
Object.seal(emp) 

/*
freeze makes an object completely immutable, while Object. seal allows existing properties to be 
modified, but prevents the addition and deletion of new properties
*/

emp.eCompany = "cognizant"

console.log(emp);

/*
{
  eName: 'ramesh',
  eId: 45,
  eCompany: 'cognizant',
  ePlace: 'Mankarwadi'
}
*/

console.log(Object.keys(emp));  // [ 'eName', 'eId', 'eCompany', 'ePlace' ]

console.log(Object.values(emp));    // [ 'ramesh', 45, 'Accenture', 'Mankarwadi' ]

console.log(Object.entries(emp))
// used to fetch both keys & values.

/*
[
  [ 'eName', 'ramesh' ],
  [ 'eId', 45 ],
  [ 'eCompany', 'Accenture' ],
  [ 'ePlace', 'Mankarwadi' ]
]
*/


/************************************************************************************ */
// Creating object using Object method

// let a = new Object();
// a.name = "Kunal"
// a.id = "9447"

// console.log(a)

/************************************************************************************ */
// Creating object using function

function employee(eName, eId) {
    this.eName = eName
    this.eId = eId
}

let e1 = new employee("rajesh", 4131)
console.log(e1) // employee { eName: 'rajesh', eId: 4131 }

let e2 = new employee("suresh", 645)
console.log(e2);    // employee { eName: 'suresh', eId: 645 }
