// 4- O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, 
// e retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos', 
// faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 
// 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

const lib = require('./funcoes');
const fetch = require('node-fetch');
const API_URL = 'https://api.github.com/users/tryber/repos';

test('Testando se função retorna o esperado', async () => {
  const response = await lib.getRepos(API_URL);
  expect(response.some(name => name === 'sd-01-week4-5-project-todo-list')).toBe(True);
})
