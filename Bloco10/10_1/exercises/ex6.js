// 6- Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado 
// como exemplo sobre os testes de promise.

// 6.1. Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá 
// passar no teste abaixo.

// Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find(animal => animal.name === name);
      if (animal) {
        return resolve(animal);
      } else return reject('Nenhum animal com esse nome!');
    }, 1000);
  });
};

const getAnimal = name => findAnimalByName(name).then(animal => animal);

module.exports = {
  getAnimal,
  findAnimalByName,
  Animals,
};
