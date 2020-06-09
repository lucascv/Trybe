const fatorial = (num) => {
  let resultado = 1;
  for (let i = 1; i <= num; i += 1) {
    resultado = resultado * i;
  }
  return resultado;
};

console.log(fatorial(4));
