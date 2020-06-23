// A função sum(a, b) retorna a soma do parâmetro a com o b

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

// 1- Teste se o retorno de sum(4, 5) é 9
assert.equal(sum(4, 5), 9);

// 2- Teste se o retorno de sum(0, 0) é 0
assert.equal(sum(0, 0), 0);

// 3- Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
// assert.equal(sum(4, "5"), 9);
