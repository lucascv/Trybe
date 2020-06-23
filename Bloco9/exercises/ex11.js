// Faça o teste de uma função que compara dois números e retorna true se o primeiro for 
// maior que o segundo e false caso contrário.

const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui

assert.equal(isAbove(10, 5), true);
assert.equal(isAbove(5, 10), false);
