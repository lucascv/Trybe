// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números 
// de 1 até N.

function somaAteNumero(n) {
  let sum = 0;
  for (i = 1; i <= n; i += 1) {
    sum += i;
  }
  return sum;
}

console.log(somaAteNumero(5));
