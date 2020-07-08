// 1- Baseando-se nos códigos acima, defina uma função que retorna um número aleatório entre 1 e 100.
// A seguir, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível
// pelo número do parâmetro. Assim:

let numeroAleatorio = () => Math.floor(Math.random() * 101);

let isDivisible = (num) => (numeroAleatorio() % num) === 0;

// Feito isso, escreva um teste que verifica que a função randomNumber() é chamada quando 
// invocamos a isDivisible().

test("Verifica se função random foi chamada ao invocar a isDivisible", () => {
  numeroAleatorio = jest.fn();

  isDivisible();
  expect(numeroAleatorio).toHaveBeenCalledTimes(1);
});

// 2- Teste que, quando a randomNumber() retorna um número par e isDivisible() recebe um dois, 
// o retorno é true.

test('Quando random retorna par e isDivisible recebe o número 2 o resultado é true', () => {
  numeroAleatorio = jest
    .fn()
    .mockReturnValueOnce(58);
  
  expect(isDivisible(2)).toBe(true);
})

// 3- Simule (mocke) dois valores para a função randomNumber() retornar e um terceiro valor default.
//  Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme 
// esperado.

test('Fixar 3', () => {
  numeroAleatorio = jest
    .fn()
    .mockReturnValueOnce(60)
    .mockReturnValueOnce(33)
    .mockReturnValueOnce('default value');

  expect(isDivisible(2)).toBe(true);  // Primeira chamada pega o 60
  expect(isDivisible(1)).toBe(true);  // Segunda chamada pega o 33
  expect(isDivisible(1)).toBe(false);  // Terceira chamada pega o default
  expect(isDivisible(1)).toBe(false);  // Parece que após acabarem as opções sempre retorna false
})

