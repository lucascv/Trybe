const ex1 = require('./ex1');
const ex2 = require('./ex2');
const ex3 = require('./ex3');
const ex4 = require('./ex4');
const ex5 = require('./ex5');
const ex6 = require('./ex6');
const ex7 = require('./ex7');
const ex8 = require('./ex8');
const { obj1, obj2, obj3 } = require('./ex10');
const ex11 = require('./ex11');
const fizzBuzz = require('./bonus1');
const palindrome = require('./bonus2');


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

describe('ex6', () => {
  test('Função retorna "fizzbuzz" quando parametro é divisivel por 3 e 5', () => {
    expect(ex6(15)).toEqual("fizzbuzz");
  });

  test('Função retorna "fizz" quando parametro é divisivel apenas por 3', () => {
    expect(ex6(6)).toEqual('fizz');
  });

  test('Função retorna "buzz" quando parametro é divisivel apenas por 5', () => {
    expect(ex6(10)).toEqual('buzz');
  });

  test('Função retorna o próprio parametro quando não é divisivel por 3 e 5', () => {
    expect(ex6(8)).toBe(8);
  });

  test('Testa se retorna false quando parametro não é um número', () => {
    expect(ex6('teste')).toEqual(false);
  });
})

describe('ex7', () => {
  test('Teste se uma variável foi definida', () => {
    expect(typeof ex7).not.toBe('undefined');
  });
})

describe('ex8', () => {
  test('Teste se a função foi definida', () => {
    expect(typeof ex8).toBe('function');
  });
})

describe('ex10', () => {
  test('Verificar se os dois objetos são idênticos', () => {
    expect(obj1).toEqual(obj2);
  });

  test('Verificar se os dois objetos são diferentes', () => {
    expect(obj1).not.toEqual(obj3);
  });
})

describe('ex11', () => {
  test('Testa se função retorna true quando parametros forem 10 e 5', () => {
    expect(ex11(10, 5)).toEqual(true);
  });

  test('Testa se a função retorna false quando parametros forem 5 e 10', () => {
    expect(ex11(5, 10)).toEqual(false);
  });
})

describe('bonus1', () => {
  test('fizzBuzz function is defined', () => {
    expect(fizzBuzz).toBeDefined();
  });
  
  test('Calling fizzbuzz with `5` prints out 5 statements', () => {
    fizzBuzz(5);
  
    expect(console.log.mock.calls.length).toEqual(5);
  });

  beforeEach(() => {
    jest.spyOn(console, 'log');
  });
  
  afterEach(() => {
    console.log.mockRestore();
  });
})

describe('bonus2', () => {
  test('palindrome function is defined', () => {
    expect(typeof palindrome).toEqual('function');
  });

  test('"aba" is a palindrome', () => {
    expect(palindrome('aba')).toBeTruthy();
  });

  test('" aba" is not a palindrome', () => {
    expect(palindrome(' aba')).toBeFalsy();
  });

  test('"aba " is not a palindrome', () => {
    expect(palindrome('aba ')).toBeFalsy();
  });

  test('"greetings" is not a palindrome', () => {
    expect(palindrome('greetings')).toBeFalsy();
  });

  test('"1000000001" a palindrome', () => {
    expect(palindrome('1000000001')).toBeTruthy();
  });

  test('"Fish hsif" is not a palindrome', () => {
    expect(palindrome('Fish hsif')).toBeFalsy();
  });

  test('"pennep" a palindrome', () => {
    expect(palindrome('pennep')).toBeTruthy();
  });
})