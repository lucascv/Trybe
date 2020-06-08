const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1- Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três 
// parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o 
// valor dela.

const funcao = (objeto, chave, valor) => {
  objeto[`${chave}`] = valor;
  return objeto;
}

console.log(funcao(lesson2, 'turno', 'manhã'));

// 2- Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como 
// parâmetro.

const funcao1 = (objeto) => {
  const chaves = Object.keys(objeto);
  return chaves;
}

console.log(funcao1(lesson2));

// 3- Crie uma função para mostrar o tamanho de um objeto.

const funcao2 = (objeto) => {
  const entradas = Object.entries(objeto);
  return entradas.length;
}

console.log(funcao2(lesson2));

// 4- Crie uma função para listar os valores de um objeto. Essa função deve receber um 
// objeto como parâmetro.

const funcao3 = (objeto) => {
  const valores = Object.values(objeto);
  return valores;
}

console.log(funcao3(lesson2));
