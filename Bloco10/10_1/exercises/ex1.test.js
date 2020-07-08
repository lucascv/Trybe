// 1- Escreva um teste que verifique a chamada do callback de uma função uppercase, 
// que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter 
// cuidado com os falso-positivos em testes assíncronos.

const lib = require('./funcoes')


describe('exercicio 10-1', () => {
  test('Testando se função retorna o esperado', (done) => {
    lib.uppercase('teste', (callback) => {
      expect(callback).toBe('TESTE');
      done();
    });
  });
});
