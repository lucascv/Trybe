// Bonus - Faça um teste que verifique a chamada dessa API para um resultado específico. 
// Para isso, faça um mock do fetch, que faz a chamada à API, utilizando os seguintes dados:

/*
{
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
}
*/

const api = require('./bonus');

test('Bonus', () => {
  const apiURL = jest.spyOn(api, "fetchJoke");
  apiURL.mockResolvedValue('resolved');

  expect(apiURL()).resolves.toBe('resolved');
});
