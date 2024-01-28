
///////////////////////////////////////
// forEach With Maps and Sets
// Map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
    console.log(`${key} : ${value}`);
    /*
    USD : United States dollar
    EUR : Euro
    GBP : Pound sterling
    */
});

console.log();

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUnique.forEach((value, key, set) => {
    console.log(`${value} ${set}`);
    /*
    USD [object Set]
    GBP [object Set]
    EUR [object Set]
    */
});