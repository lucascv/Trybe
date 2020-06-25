// Teste se uma função foi definida

const assert = require('assert');

function thereIs() {}

// implemente seus testes aqui

assert.equal(typeof(thereIs), "function");

module.exports = thereIs
