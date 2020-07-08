let numeroAleatorio = () => Math.floor(Math.random() * 101);

let isDivisible = (num) => (numeroAleatorio() % num) === 0;

test("Verifica se função random foi chamada ao invocar a isDivisible", () => {
  numeroAleatorio = jest.fn();

  isDivisible();
  expect(numeroAleatorio).toHaveBeenCalledTimes(1);
});
