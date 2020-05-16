// Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com 
// que todos eles sejam funções de um mesmo arquivo.

let a = 5;
let b = 8;
let c = 60;

// Adição

function soma(a, b) {
    return a + b;
}

console.log(soma(a, b));

// Subtração

function subtracao(a, b) {
    return a - b;
}

console.log(subtracao(a, b));


// Multiplicação

function multiplicacao(a, b) {
    return a * b;
}

console.log(multiplicacao(a, b));

// Divisão

function divisao(a, b) {
    return a / b;
}

console.log(divisao(a, b));

// Módulo

function modulo(a, b) {
    return a % b;
}

console.log(modulo(a, b));

// Maior de dois números

function maiorNumero(a, b) {
    if (a > b) {
        return a;
    }   else if (a < b) {
            return b;
    }   else {
            return "Números iguais.";
    }
}

console.log(maiorNumero(a, b));

// Maior de três números

function maiorEntreTresNumeros(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    } else {
        return "Existem números iguais.";
    }
}

console.log(maiorEntreTresNumeros(a, b, c));

// Positivo, negativo ou nulo

function positiveOrNegative(a) {
    if (a > 0) {
        return "positive";
    } else if (a === 0) {
        return "nulo";
    } else {
        return "negative";
    }
}

console.log(positiveOrNegative(a));

// Confirma se é possivel formar triangulo dado 3 angulos.

function triangulo(a, b, c) {
    if ((a + b + c) === 180) {
        return true;
    } else {
        return false;
    }
}

console.log(triangulo(a, b, c));

// Transforma nota do aluno de % em Letras.

function conversaoNotaALuno(a) {
    if (a >= 90 && a <= 100) {
        return "A";
    } else if (a < 90 && a >= 80) {
        return "B";
    } else if (a < 80 && a >= 70) {
        return "C";
    } else if (a < 70 && a >= 60) {
        return "D";
    } else if (a < 60 && a >= 50) {
        return "E";
    } else if (a < 50 && a >= 0) {
        return "F";
    } else {
        return "Valor da prova é menor que zero ou maior que 100.";
    }
}

console.log(conversaoNotaALuno(c));

// Confere se é par ou ímpar

function parImpar(a) {
    if (a % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

console.log(parImpar(a));

// Calcula lucro da venda de um produto. 

function lucroProduto(custo, valorVenda, quantidadeVendas) {
    if (custo < 0 || valorVenda < 0 || quantidadeVendas < 0) {
        return "Mensagem de erro";
    }  else {
         return ((valorVenda - custo) * 0.8) * quantidadeVendas;
    }
}

console.log(lucroProduto(a, b, c).toFixed(2));

// Calculo Imposto de Renda

function impostoRenda(salarioBruto) {
    let salarioBase = 0;
    if (salarioBruto <= 1556.94 && salarioBruto > 0) {
        salarioBase = salarioBruto * 0.92;
    } else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
        salarioBase = salarioBruto * 0.91;
    } else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
        salarioBase = salarioBruto * 0.89;
    } else if (salarioBruto > 5189.82) {
        salarioBase = salarioBruto - 570.88;
    } else {
        return "Salario informado é negativo"
    }

    if (salarioBase > 0 && salarioBase <= 1903.98) {
        return "Salário final -> " + salarioBase;
    }   else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
            return "Salário final -> " + (salarioBase - ((salarioBase * 0.075) - 142.80));
    }   else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
            return "Salário final -> " + (salarioBase - ((salarioBase * 0.15) - 354.80));
    }   else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
            return "Salário final -> " + (salarioBase - ((salarioBase * 0.225) - 636.13));
    }   else {
            return "Salário final -> " + (salarioBase - ((salarioBase * 0.275) - 869.36));
    }
}

console.log(impostoRenda(3000));
