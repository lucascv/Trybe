// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i+=1) {
    for (let j = 0; j < i; j+=1) {
        if (numbers[i] < numbers[j]) {
            let position = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
}

console.log(numbers);

// Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers2.length; i+=1) {
    for (let j = 0; j < i; j+=1) {
        if (numbers2[i] > numbers2[j]) {
            let position = numbers2[i];
            numbers2[i] = numbers2[j];
            numbers2[j] = position;
        }
    }
}

console.log(numbers2);

// Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do 
// novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo 
// próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação 
// de 5 (valor correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação
// deverá ser feita por 2. Faça isso utilizando o for e o método push.

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let i = 0; i < numbers3.length; i += 1) {
    if ((i + 1) < numbers3.length) {
        newArray[i] = numbers3[i] * numbers3[i + 1];
    }
    else {
        newArray[i] = numbers3[i] * 2;
    }
}

console.log(newArray);

// Mesma questão acima mas usando o método push

let numbers4 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray2 = [];

for (let i = 0; i < numbers4.length; i += 1) {
    if ((i + 1) < numbers4.length) {
        newArray2.push(numbers4[i] * numbers4[i + 1]);
    }
    else {
        newArray2.push(numbers4[i] * 2);
    }
}

console.log(newArray2);


