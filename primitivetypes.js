/* 
Null vs Undefined
Null---> explecitly done by developer/Programmer
Undefined --> implecitely done by system
1. Triple equality follows IEEE754 rule

👉  Any comparison involving NaN must return false — even comparing NaN with itself.

Formally:

NaN is not equal to anything,

Not even equal to another NaN,

Not even equal to itself.

NaN occurs when there is error/failure in Mathematical operation(0/0 or sqrt(-1)) or we try to do a string conversion eg. parseInt("Hello")
0/0===sqrt(-1)  no ye dono NaN alag alag issues ki wajh se hai 
2. Object.is() follows sameValue Rule





*/

/* 
console.log(NaN===NaN)
console.log(Object.is(NaN,NaN))

//to check a NaN 
console.log(Number.isNaN(5))
console.log(`Conversion of String ${Number.isNaN(parseFloat("abc"))}`)
console.log(isNaN(5))

const operators={
    "+":(a,b)=> a+b,
    "-":(a,b)=> a-b,
    "/":(a,b)=> a/b,
    "%":(a,b)=> a%b,
    "*":(a,b)=> a*b,
    "**":(a,b)=> a**b,
    "roots":(a,b)=> a**(1/b)
    
}

function compute(n1,n2,whichoperator){
   const op=operators[whichoperator]
   return op(n1,n2)

}

let result= compute(-25,3,"roots")
console.log(result)

*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */


function OTPgeneration(length=6){
    let OTP=''
    for(let i=0;i<length;i++){
       
        OTP += Math.floor(Math.random()*10)
    }
    return OTP
}

console.log(OTPgeneration()) 


function differentOTP(numberoftimes=4){
    for (let ntimes = 0; ntimes < numberoftimes; ntimes++) {
        
        console.log(OTPgeneration(length=7))
        console.log(`This is unique OTP generation ${UniqueOTP()}`)
    }
}

differentOTP(numberoftimes=4)


/*------------------------------------------------------------------------ */
// Unique OTP Generation
function UniqueOTP(le=7){
    let OTPUNI=''

while (OTPUNI.length<le) {
    randomNumber=Math.floor(Math.random()*10)
    if (OTPUNI.includes(String(randomNumber))) {
        continue //Continue will skip this loop yhi se hi upr chla jaega
    } else {
        OTPUNI+=randomNumber
    }
    
}

return OTPUNI
}




