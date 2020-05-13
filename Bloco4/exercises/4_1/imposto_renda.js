let salarioBruto = 3000;
let inss = 0;
let ir = 0;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
    inss = salarioBruto * 0.11;
    if (inss > 570.88) {
        inss = 570.88;
    } else {
        inss = inss;
    }
} else {
    console.log("Salário informado é nulo ou negativo.");
}

let salarioBase = salarioBruto - inss;

if (salarioBase > 0 && salarioBase <= 1903.98) {
    ir = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    ir = (salarioBase * 0.075) - 142.80;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    ir = (salarioBase * 0.15) - 354.80;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    ir = (salarioBase * 0.225) - 636.13;
} else if (salarioBase > 4664.68) {
    ir = (salarioBase * 0.275) - 869.36;
}

salarioFinal = salarioBase - ir

console.log(salarioFinal)
