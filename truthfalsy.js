console.log(0===true)


// Added falsey in local 
console.log(Boolean(false));          // false
console.log(Boolean(0));              // false
console.log(Boolean(-0));             // false
console.log(Boolean(0n));             // false
console.log(Boolean(""));             // false
console.log(Boolean(null));           // false
console.log(Boolean(undefined));      // false
console.log(Boolean(NaN));            // false
// Added falsey in local 

// Added truthsy examples on Remote
console.log(Boolean(1));              // true
console.log(Boolean("hello"));        // true
console.log(Boolean([]));             // true
console.log(Boolean({}));             // true
console.log(Boolean("0"));            // true
console.log(Boolean(-1));             // true
console.log(Boolean([1, 2]));         // true
console.log(Boolean(function(){}));   // true
// Added truthsy examples on Remote




//alag alag line mein code add krna 

console.log(Boolean(false));        // false
console.log(Boolean(0));            // false
console.log(Boolean(-0));           // false
console.log(Boolean(0n));           // false (BigInt zero)
console.log(Boolean(""));           // false (empty string)
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean(NaN));          // false
//alag alag line mein code add krna 
