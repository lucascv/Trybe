// Faça um programa que diz se um número definido numa variável é primo ou não.

let num = 11;
let primos = 0;

for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
        primos += 1;
    }
}

if (primos === 2) {
    console.log("Primo.");
} else {
    console.log("NÃO é primo.");
}
