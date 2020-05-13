// Descubra quantos valores ímpares existem no array e imprima o resultado. 
// Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
impares = 0;

for (index in numbers) {
    if (numbers[index] %2 !== 0) {
        impares += 1;
    }
}

if (impares > 0) {
    console.log("Foram encontrados " + impares + " valores ímpares.");
} else {
    console.log("Nenhum valor ímpar encontrado");
}
