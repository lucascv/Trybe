const funcao = (objeto, chave, valor) => {
  objeto[`${chave}`] = valor;
  return objeto;
}

let objeto = {1: 'trybe'};

console.log(funcao(objeto, 'teste', 'lucas'));
console.log(funcao(objeto, 'profissao', 'dev full stack'));
