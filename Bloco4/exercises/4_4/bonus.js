// Faça um programa que receba uma string em algarismos romanos e retorne o número que a 
// string representa.


function transformaRomanoEmInteiro(numRomano) {
  let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let numInteiro = [];
  let sum = 0;
  
  for (i = 0; i < numRomano.length; i += 1) {
    if (numRomano[i] in romanos) {
      numInteiro[i] = romanos[numRomano[i]];
    }
    else {
      return 'Número romano não encontrado';
    }
  }

  if (numInteiro[0] < numInteiro[numInteiro.length - 1]) {
    for (i = 0; i < numInteiro.length; i += 1) {
      if (i === 0) {
        sum -= numInteiro[i];

      }
      else {
        sum += numInteiro[i];
      }
    }
  }
  else {
    for (index in numInteiro) {
      sum += numInteiro[index];
    }
  }
  return sum;
}

console.log(transformaRomanoEmInteiro('XI'));
console.log(transformaRomanoEmInteiro('XXX'));
console.log(transformaRomanoEmInteiro('MXI'));
console.log(transformaRomanoEmInteiro('IX'));
console.log(transformaRomanoEmInteiro('IV'));
console.log(transformaRomanoEmInteiro('CM'));
console.log(transformaRomanoEmInteiro('A'));
