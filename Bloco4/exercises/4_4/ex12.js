// Crie uma função que receba uma string word e outra string ending. Verifique se a string 
// ending é o final da string word. Considere que a string ending sempre será menor que a 
// string word.

function verificaFimPalavra(stringWord, stringEnding) {
  let fimIgual = true;
  for (let i = 1; i <= stringEnding.length; i += 1) {
    if (stringWord[stringWord.length - i] !== stringEnding[stringEnding.length - i]) {
      fimIgual = false;
    }
  }

  return fimIgual;
}

console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));
