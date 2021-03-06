// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem 
// o elemento item caso ele exista no array

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

// 1- Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado

assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// 2- Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

assert.notDeepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// 3- Verifique se o array passado por parâmetro não sofreu alterações

let entrada = [1, 2, 3, 4];

assert.notDeepEqual(myRemoveWithoutCopy(entrada, 3), [1, 2, 3, 4]);

// 4- Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
