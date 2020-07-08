// 2- Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função 
// getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que 
// o usuário não é encontrado.

// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, 
// para saber quais IDs existem.

const lib = require('./funcoes');

const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
  };
    

describe('testando funcao quando usuário é encontrado', () => {
  test('testando se funcao retorna usuário com ID 4', () => {
    return lib.findUserById(4).then(user => {
      expect(user.name).toEqual('Mark');
    });
  });

  test('Testando se função retorna usuário com ID 5', () => {
    return lib.findUserById(5).then(user => {
      expect(user.name).toEqual('Paul');
    });
  });

  test("findUserById(1) = { error: 'User with 1 not found.' }", () => {
    expect.assertions(1);
    return lib.findUserById(1).catch(error =>
      expect(error).toEqual({ error: 'User with 1 not found.' }),
    );
  });
})
