// 4- Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela 
// deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar
// a última letra de uma string. A terceira deve receber três strings e concatená-las.

const math = require('./funcoes');
jest.mock('./funcoes');

test('Ex4', () => {
  math.uppercase.mockImplementation(string => string.toLowerCase());
  math.firstWord.mockImplementation(string => string[string.length - 1]);
  math.sumStrings.mockImplementation((string1, string2, string3) => string1 + string2 + string3);

  expect(math.uppercase('Teste')).toBe('teste');
  expect(math.uppercase('OI')).toBe('oi');

  expect(math.firstWord('Teste')).toBe('e');
  expect(math.firstWord('Oi')).toBe('i');

  expect(math.sumStrings('Teste', 'Teste', 'Teste')).toBe('TesteTesteTeste');

  expect(math.uppercase).toHaveBeenCalledTimes(2);
  expect(math.firstWord).toHaveBeenCalledTimes(2);
  expect(math.sumStrings).toHaveBeenCalledTimes(1);

});
