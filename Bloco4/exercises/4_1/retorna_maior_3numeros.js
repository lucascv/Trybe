// Faça um programa que retorne o maior de três números. 
// Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 2;
let b = 3;
let c = 7;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
} else {
    console.log("Existem números que são iguais.")
}
