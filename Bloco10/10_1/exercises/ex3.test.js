// 3- Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.

// Dica: Utilize o try/catch para o caso de erro.

const lib = require('./funcoes');

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

describe('Testando função com async/await', () => {
	test('Testando se função retorna "Mark" com ID 4 de parâmetro', async () => {
		const response = await lib.findUserById(4);
		expect(response.name).toEqual('Mark');
	});

	test('Testando se função retorna "Paul" com parâmetro 5', async () => {
		const response = await lib.findUserById(5);
		expect(response.name).toEqual('Paul');
	});

	test('Testando erro da função', async () => {
		try {
			await lib.findUserById(1);
		} catch (err) {
			expect(err).toEqual({ error: 'User with 1 not found.' });
		}
	})
})
