// 3- Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova 
// implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos 
// testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne 
// seu dobro. Faça os testes necessários.

const math = require('./funcoes');

test('Ex3', () => {
  const mockRandom = jest
    .spyOn(math, "randomNumber")
    .mockImplementation((a, b, c) => a * b * c);

  expect(mockRandom(1, 1, 1)).toBe(1);
  expect(mockRandom(1, 2, 3)).toBe(6);
  expect(mockRandom(0, 1, 2)).toBe(0);
  expect(mockRandom).toHaveBeenCalledTimes(3);

  mockRandom.mockClear();
  mockRandom.mockImplementation((a) => a * 2);

  expect(mockRandom(1)).toBe(2);
  expect(mockRandom(2)).toBe(4);
  expect(mockRandom).toHaveBeenCalledTimes(2);

});
