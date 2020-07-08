// 1- Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os 
// testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a 
// função foi chamada, qual seu retorno e quantas vezes foi chamada.

const math = require('./funcoes');

test('ex1', () => {
  math.randomNumber = jest
    .fn()
    .mockReturnValue(10);
  
  expect(math.randomNumber()).toEqual(10);
  expect(math.randomNumber).toHaveBeenCalled();
  expect(math.randomNumber).toHaveBeenCalledTimes(1);
});
