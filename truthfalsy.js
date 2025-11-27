console.log(0===true)

console.log(Boolean(false));          // false
console.log(Boolean(0));              // false
console.log(Boolean(-0));             // false
console.log(Boolean(0n));             // false
console.log(Boolean(""));             // false
console.log(Boolean(null));           // false
console.log(Boolean(undefined));      // false
console.log(Boolean(NaN));            // false
// Added falsey in local 
console.log(Boolean(1));              // true
console.log(Boolean("hello"));        // true
console.log(Boolean([]));             // true
console.log(Boolean({}));             // true
console.log(Boolean("0"));            // true
console.log(Boolean(-1));             // true
console.log(Boolean([1, 2]));         // true
console.log(Boolean(function(){}));   // true
// Added truthsy examples on Remote

