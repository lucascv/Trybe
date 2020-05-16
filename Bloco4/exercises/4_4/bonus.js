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
  
  for (let i = 0; i < numRomano.length; i += 1) {
    if (numRomano[i].toUpperCase() in romanos) {
      numInteiro[i] = romanos[numRomano[i]];
    }
    else {
      return 'Número romano não encontrado';
    }
  }

  for (let n = 0; n < numInteiro.length; n += 1) {
    if (n < numInteiro.length - 1) {
      if (numInteiro[n] < numInteiro[n + 1]) {
        sum -= numInteiro[n];
      }
      else {
        sum += numInteiro[n];
      }
    }
    else {
      sum += numInteiro[n];
    }    
  }
  return sum;
}

let vetorRomano = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV',
'XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII',
'XXIX','XXX','XXXI','XXXII','XXXIII','XXXIV','XXXV','XXXVI','XXXVII','XXXVIII','XXXIX','XL',
'XLI','XLII','XLIII','XLIV','XLV','XLVI','XLVII','XLVIII','XLIX','L','LI','LII','LIII','LIV',
'LV','LVI','LVII','LVIII','LIX','LX','LXI','LXII','LXIII','LXIV','LXV','LXVI','LXVII','LXVIII',
'LXIX','LXX','LXXI','LXXII','LXXIII','LXXIV','LXXV','LXXVI','LXXVII','LXXVIII','LXXIX','LXXX',
'LXXXI','LXXXII','LXXXIII','LXXXIV','LXXXV','LXXXVI','LXXXVII','LXXXVIII','LXXXIX','XC','XCI',
'XCII','XCIII','XCIV','XCV','XCVI','XCVII','XCVIII','XCIX','C'];

for (const key in vetorRomano) { 
  console.log(transformaRomanoEmInteiro(vetorRomano[key]));
}
