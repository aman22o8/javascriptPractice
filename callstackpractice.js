let i = 3;
while (i < 2) {
  console.log("The number is " + i);
  i++; // Increment i to eventually make the condition false
}

function handler() {
    console.log("HEllo")
    
}

setTimeout(handler,1000)