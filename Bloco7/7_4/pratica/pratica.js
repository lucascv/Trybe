// Função que valida que um array de números não possui múltiplos de 3, 5, 7 e 11

const assert = require('assert');

const arr = [4, 8, 13, 17];

function funcao1(arr) {
  let confirm = false;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 !== 0 && arr[i] % 5 !== 0 && arr[i] % 7 !== 0 && arr[i] % 11 !== 0) {
      confirm = true;
    }
  }
  return confirm;
}

assert.strictEqual(typeof(funcao1), 'function');
assert.strictEqual(funcao1([3, 5, 7, 11]), false);
assert.strictEqual(funcao1([4, 8, 13, 17]), true);
