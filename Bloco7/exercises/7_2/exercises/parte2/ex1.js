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

// 5- Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do 
// Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: 
// lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá 
// ser a seguinte:

let allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);

// 6- Usando o objeto criado no exercício 5, crie uma função que retorne o número total de 
// estudantes em todas as aulas.

const funcao6 = (objeto) => {
  let soma = 0;
  for (index in allLessons) {
    soma += allLessons[index].numeroEstudantes;
  }
  return soma;
}

console.log(funcao6(allLessons));

// 7- Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 

const funcao7 = (objeto, posicao) => {
  const valores = Object.values(objeto);
  return valores[posicao];
}

console.log(funcao7(lesson1, 0));

// 8- Crie uma função que verifique se o par (chave / valor) existe na função. Essa função 
// deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const funcao8 = (objeto, chave, valor) => {
  if (objeto[chave] === valor) {
    return true;
  }
  else {
    return false;
  }
}

console.log(funcao8(lesson1, 'professor', 'João'));
