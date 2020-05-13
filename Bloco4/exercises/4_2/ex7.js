// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
menorValor = 1000;

for (index in numbers) {
    if (numbers[index] <= menorValor) {
        menorValor = numbers[index];
    }
}

console.log(menorValor);
