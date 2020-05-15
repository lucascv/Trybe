// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array = [2, 3, 6, 7, 10, 1];

function maiorValorArray(array) {
  let maiorNumero = 0;
  let index = undefined;
  
  for (indice in array) {
    if (array[indice] >= maiorNumero) {
      maiorNumero = array[indice];
      index = indice;
    }
  }

  return index;
}

console.log(maiorValorArray(array));
