const maiorPalavra = (frase) => {
  const splitFrase = frase.split(' ');
  let maior = '';
  let quantidadeMaior = 0;
  for (index in splitFrase) {
    if (splitFrase[index].length > quantidadeMaior) {
      quantidadeMaior = splitFrase[index].length;
      maior = splitFrase[index];
    }
  }
  return maior;
};

const frase = "Antônio foi no banheiro e não sabemos o que aconteceu";
console.log(maiorPalavra(frase));
