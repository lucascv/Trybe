// 5- Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira 
// função. Após repetir a implementação, restaure a implementação original e crie os testes 
// necessários para validar.

const math = require('./funcoes');

test('Ex5', () => {
  const mockUpper = jest
    .spyOn(math, "uppercase")
    .mockImplementation((string) => string.toLowerCase());

  expect(mockUpper('Teste')).toBe('teste');
  expect(mockUpper).toHaveBeenCalled();

  math.uppercase.mockRestore();

  expect(math.uppercase('Teste')).toBe('TESTE');
  expect(mockUpper).toHaveBeenCalledTimes(0);

});
