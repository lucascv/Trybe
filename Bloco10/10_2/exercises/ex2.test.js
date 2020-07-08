// 2- Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, 
// que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação 
// deve ocorrer uma única vez. Faça os testes necessários.

const math = require('./funcoes');

test('Ex2', () => {
  math.randomNumber = jest
  .fn()
  .mockImplementationOnce((a, b) => a / b);

  expect(math.randomNumber(4, 2)).toBe(2);
  expect(math.randomNumber).toHaveBeenCalledTimes(1);
});
