

function grandParent1() {
    console.log("Baba");

    function parent1() {
        console.log("pappa");

        function child1() {
            console.log("kunal");
        }
        child1()
    }
    parent1()
}
grandParent1()

console.log();
////////////////////////////////////////////////
////////////////////////////////////////////////////

function grandParent2() {
    console.log("Anna");

    function parent2() {
        console.log("appa");

        function child2() {
            console.log("kunal");
        }
        return child2
    }
    return parent2
}
grandParent2()()

console.log();
//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

function grandParent2() {
    console.log("Anna");

    function parent2() {
        console.log("appa");

        function child2() {
            console.log("kunal");
        }
        return child2
    }
    return parent2
}
grandParent2()


