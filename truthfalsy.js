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























console.log(true, Boolean(true));
console.log(1, Boolean(1));
console.log(-1, Boolean(-1));
console.log("hello", Boolean("hello"));
console.log("0", Boolean("0"));
console.log("false", Boolean("false"));     // non-empty strings are truthy
console.log([], Boolean([]));               // empty array
console.log({}, Boolean({}));               // empty object
console.log(function(){}, Boolean(function(){})); // any function
console.log(42, Boolean(42));
console.log(" ", Boolean(" "));             // string with a space
console.log(Infinity, Boolean(Infinity));
console.log(-Infinity, Boolean(-Infinity));
