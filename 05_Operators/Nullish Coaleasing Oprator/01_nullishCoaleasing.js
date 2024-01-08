
/////////////////////////////////////////////////////////
// nullish coaleasing works with the nullish values instead of truthy & falsy values
// Nullish values are NULL & undefined

// returns first not nullish value, if all are nullish values then returns last value

////////////////////////////////////////////////////////
console.log(5 ?? 10);   // 5
console.log(null ?? 'Hii');    // Hii
console.log(null ?? undefined ?? false ?? 45); // false space
console.log(undefined ?? null ?? '');   // ''

console.log(null ?? undefined ?? null); // null
console.log(null ?? undefined ?? undefined);    // undefined
////////////////////////////////////////////////////////

// can be used on objects