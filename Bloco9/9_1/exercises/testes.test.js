const ex1 = require('./ex1')
const ex2 = require('./ex2')
const ex3 = require('./ex3')
const ex4 = require('./ex4')
const ex5 = require('./ex5')

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

describe('ex3', () => {
  test('mySum([1, 2, 3, 4]) retorna o valor 10', () => {
    expect(ex3([1, 2, 3, 4])).toBe(10);
  })

  test('mySum([1, -2, -3, 4]) retorna o valor esperado', () => {
    expect(ex3([1, -2, -3, 4])).toBe(0);
  })
})

describe('ex4', () => {
  test('myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(ex4([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(ex4([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifica se o array passado por parâmetro não sofreu alterações', () => {
    expect(ex4([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

describe('ex5', () => {
  test('myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(ex5([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(ex5([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifica se o array passado por parâmetro não sofreu alterações', () => {
    expect(ex5([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(ex5([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})


