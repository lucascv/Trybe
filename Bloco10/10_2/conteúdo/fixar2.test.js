const math = require('./fixar2');

// 1- Faça o mock da funcão subtrair e teste sua chamada.

test('Teste função subtrair', () => {
  math.subtrair = jest.fn();

  math.subtrair();

  expect(math.subtrair).toHaveBeenCalled();
});

// 2- Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. 
// Teste a chamada e o retorno.

test('Teste da função multiplicar', () => {
  math.multiplicar = jest
    .fn()
    .mockReturnValue(10);
  
  math.multiplicar();

  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});

// 3- Faça o mock da função somar e implemente uma função que recebe dois valores e 
// retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.

test('Teste da função somar', () => {
  math.somar = jest
    .fn()
    .mockImplementation((a, b) => a + b);
  
  expect(math.somar(1, 2)).toBe(3);
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenLastCalledWith(1, 2);
})
