// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos 
// que ela faz.

peca = "REI"

switch (peca.toLowerCase()) {
    case 'peao':
    console.log("Pode se deslocar 1 casa para frente.");
    break;

    case 'cavalo':
    console.log("Pode se deslocar em 'L'. Sendo dois movimentos para frente e um lateral.");
    break;

    case 'rei':
    console.log("Pode se deslocar 1 casa para qualquer direção.");
    break;

    case 'dama':
    console.log("Pode se deslocar quantas casas quiser para qualquer direção.");
    break;

    case 'bispo':
    console.log("Se move quantas casas quiser apenas na DIAGONAL.");
    break;

    case 'torre':
    console.log("Se move horizontal ou verticalmente quantas casas quiser.");
    break;

    default:
    console.log("Peça inválida.")
    break;
}
