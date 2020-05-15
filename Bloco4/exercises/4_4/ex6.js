// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false, 
// se não for.

function verificaPalindromo(palavra) {
  let diferencas = 0;
  let n = 1;
  for (let i = 0; i < palavra.length; i+=1) {
    if (palavra[i] !== palavra[palavra.length - n]) {
      n += 1;
      diferencas += 1;
    } 
    else {
      n += 1;
    }
  }
  if (diferencas > 0) {
    return false
  }
  else {
    return true
  }
}

console.log(verificaPalindromo("arara"));
console.log(verificaPalindromo("desenvolvimento"));
console.log(verificaPalindromo("ana"));
console.log(verificaPalindromo("reviver"));
console.log(verificaPalindromo("mussum"));
console.log(verificaPalindromo("brasil"));
