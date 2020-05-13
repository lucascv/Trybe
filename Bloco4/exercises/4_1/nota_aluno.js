// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos 
// de A a F. 

let nota = 37;

if (nota >= 90 && nota <= 100) {
    console.log("A");
} else if (nota >= 80 && nota < 90) {
    console.log("B");
} else if (nota >= 70 && nota < 80) {
    console.log("C");
} else if (nota >= 60 && nota < 70) {
    console.log("D");
} else if (nota >= 50 && nota < 60) {
    console.log("E");
} else if (nota < 50 && nota >= 0) {
    console.log("F");
} else {
    console.log("Nota digitada é maior que 100 ou menor que 0.")
}
