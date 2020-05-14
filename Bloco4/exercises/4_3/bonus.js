// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
// Assuma que o valor de n será sempre ímpar.

let n = 7;
let spaceOut = (n-1)/2;
let spaceIn = 0;


if (n % 2 !== 0) {
    for (i = 1; i <= n; i += 2) {
        if (i === 1) {            
            console.log(" ".repeat(spaceOut) + "*" + " ".repeat(spaceOut));
            spaceOut -= 1;
            spaceIn += 1;
        } else if (i >= 1 && i < n) {
            console.log(" ".repeat(spaceOut) + "*" + " ".repeat(spaceIn) + "*" + " ".repeat(spaceOut));
            spaceOut -= 1;
            spaceIn += 2;
        } else if (i === n) {
            console.log(" ".repeat(spaceOut) + "*".repeat(i) + " ".repeat(spaceOut));
            spaceOut -= 1;
        }
    } 
}  else {
    console.log("Número digitado é par.")
}
