const math = require('./fixar2');

// 1- Faça o mock da funcão subtrair e teste sua chamada.

test('Teste função subtrair', () => {
  math.subtrair = jest.fn();

  math.subtrair();

  expect(math.subtrair).toHaveBeenCalled();
});
