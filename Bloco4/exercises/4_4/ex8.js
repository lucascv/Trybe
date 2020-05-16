// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let array = [2, 4, 6, 7, 10, 0, -3];

function maiorValorArray(array) {
  let menorNumero = 1000;
  let index = undefined;
  
  for (indice in array) {
    if (array[indice] <= menorNumero) {
      menorNumero = array[indice];
      index = indice;
    }
  }

  return index;
}

console.log(maiorValorArray(array));
