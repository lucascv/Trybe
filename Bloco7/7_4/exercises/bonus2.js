const assert = require('assert');
// escreva a função removeMiddle para passar nos testes abaixo:

const removeMiddle = (words) => {
  const index = Math.trunc(words.length/2);
  const outp = [];
  outp.push(words[index]);
  words.splice(index, 1);
  return outp;
};

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
