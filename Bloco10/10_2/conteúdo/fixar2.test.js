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
});

// 4- Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. 
// Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. 
// Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.

test('Teste da função dividir', () => {
  math.dividir = jest
    .fn()
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

  expect(math.dividir()).toBe(2);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir()).toBe(5);
  expect(math.dividir()).toBe(15);
  expect(math.dividir).toHaveBeenCalledTimes(3);

})

