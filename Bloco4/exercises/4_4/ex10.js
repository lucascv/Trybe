// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let array = [2, 3, 2, 5, 8, 2, 3];

function NumMaisRepetido(array) {
  let numbers = {};
  for (index in array) {
    if (array[index] in numbers) {
      numbers[array[index]] += 1;
    }
    else {
        numbers[array[index]] = 1;
    }
  }

  let maisRepetido = 0;
  let quantidadeRepetido = 0;
  for (index in numbers) {
    if (numbers[index] >= quantidadeRepetido) {
      maisRepetido = index;
      quantidadeRepetido = numbers[index]
    }
  }
  return maisRepetido;
}
  
console.log(NumMaisRepetido(array));
