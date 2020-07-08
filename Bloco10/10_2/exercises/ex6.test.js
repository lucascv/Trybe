// 6- Crie uma função que faça requisição para a api dog pictures. Mocke a requisição e crie 
// dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor 
// "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request 
// failed". Crie todos os testes que achar necessário.

const api = require('./ex6');

describe('Testando requisição', () => {
  const apiURL = jest.spyOn(api, "fetchURL");
  
  test('Testando requisição caso seja resolvida', async () => {
    apiURL.mockResolvedValue('request sucess');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('request sucess');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  apiURL.mockRestore();

  test('Testando requisição caso seja rejeitada', async () => {
    apiURL.mockRejectedValue('request failed');

    expect(apiURL()).rejects.toMatch('request failed');
  });

})