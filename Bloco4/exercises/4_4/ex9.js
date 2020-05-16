// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de 
// caracteres.

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function verificaMaiorNome(array) {
  let maiorNome = 'A';
  for (index in array) {
    if (array[index].length >= maiorNome.length) {
      maiorNome = array[index];
    }
  }
  return maiorNome;
}

console.log(verificaMaiorNome(array));
