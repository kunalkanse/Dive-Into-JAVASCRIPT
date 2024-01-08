
/////////////////////////////////////////////////////////
// nullish coaleasing works with the nullish values instead of truthy & falsy values
// Nullish values are NULL & undefined

// returns first not nullish value, if all are nullish values then returns last last value

////////////////////////////////////////////////////////
console.log(5 ?? 10);   // 5
console.log(null ?? 10);    // 10
console.log(null ?? undefined ?? 30 ?? 45); //30
console.log(undefined ?? null ?? 15);   // 15

console.log(null ?? undefined ?? null); // null
console.log(null ?? undefined ?? undefined);    // undefined
////////////////////////////////////////////////////////