const ex1 = require('./ex1')
const ex2 = require('./ex2')

describe('ex1', () => {
  test('soma 4 e 5 para dar 9', () => {
    expect(ex1(4, 5)).toBe(9);
  })

  test('soma 0 e 0 para dar 0', () => {
    expect(ex1(0, 0)).toBe(0);
  })

  test('Erro quanto parametro é string', () => {
    expect(() => {
      ex1(4, "5");
    }).toThrow('parameters must be numbers');
  });
})

describe('ex2', () => {
  test('myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado', () => {
    expect(ex2([1, 2, 3, 4], 3)).toBe(2);
  })

  test('myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado', () => {
    expect(ex2([1, 2, 3, 4], 5)).toBe(-1);
  })
})
