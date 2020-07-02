// 1- Escreva um teste que verifique a chamada do callback de uma função uppercase, 
// que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter 
// cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

describe('exercicio 10-1', () => {
  test('oitdbem = OITDBEM', (done) => {
    uppercase('teste', (callback) => {
      expect(callback).toBe('TESTE');
      done();
    });
  });
});
