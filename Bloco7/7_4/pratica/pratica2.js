// Faça com TDD uma função que recebe um número natural n e retorna todos os números 
// primos de 0 a esse número

function funcao1(n) {
  const primos = [];
  let primo = 0;
  if (n === 0) {
    return primos;
  }
  else if (n > 0) {
    for (let i = 1; i <= n; i += 1) {
      for (let j = 1; j <= i; j += 1) {
        if (i % j === 0) {
          primo += 1;
        }
      }
      if (primo === 2) {
        primos.push(i);
        primo = 0;
      }
      else {
        primo = 0;
      }
    }
    return primos;
  }
}

const assert = require('assert');

assert.strictEqual(typeof(funcao1), 'function');
assert.deepEqual(funcao1(0), []);
assert.deepEqual(funcao1(1), []);
assert.deepEqual(funcao1(2), [2]);
assert.deepEqual(funcao1(10), [2, 3, 5, 7]);
assert.deepEqual(funcao1(11), [2, 3, 5, 7, 11]);
