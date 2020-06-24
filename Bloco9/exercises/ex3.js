// A função mySum(arr) recebe um array arr e retorna a soma de seus elementos

const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui

// 1- Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10

assert.equal(mySum([1, 2, 3, 4]), 10);

// 2- Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado

assert.equal(mySum([1, -2, -3, 4]), 0);

module.exports = mySum
