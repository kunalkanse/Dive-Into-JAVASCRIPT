
/******************************************************************************************/
// literal

let emp = {
    eName : "Kunal",
    eId : 47,
    ePlace : "Baramati"
}

console.log(emp);   // { eName: 'Kunal', eId: 47, ePlace: 'Baramati' }
console.table(emp);

console.log(emp.eName); // kunal

emp.ePin = 413104   // added to emp object
console.log(emp)    // { eName: 'Kunal', eId: 47, ePlace: 'Baramati', ePin:413104 }

/******************************************************************************************/
// nested object

let stu = {
    sName : "sudesh",
    sId : 1243,

    sPlace : {
        sCity : "Mysore",
        sArea : "RM Circle"
    }
}

stu.sPlace.sPin = 560001

console.log(stu);

/******************************************************************************************/
// new keyword

let a = new Object();
a.ename = "Kunal";
a.id = 447;

console.log(a);

console.log();
/******************************************************************************************/
// using constructor function

function stu2(sname,sid)
{
    this.sname = sname;
    this.sid = sid;
}

let b = new stu2("Raju",006);
console.log(b);

console.log();

//console.log(window);
console.log(this);

stu2.prototype.sgender = "Male";
console.log(stu2.prototype);

console.log(b);

