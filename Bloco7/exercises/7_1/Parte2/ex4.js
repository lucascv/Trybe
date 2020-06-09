let frase = '';

const function1 = (string) => {
  frase = `Tryber ${string} aqui`;
  return frase;
};

console.log(function1('bebeto'));

const skills = ['javascript', 'html', 'css', 'excel', 'trade'];

const function2 = (frase) => {
  console.log(frase);
  console.log('Minhas cinco principais habilidades são:');
  for (index in skills) {
    console.log(`- ${skills[index]}`);
  }
};

function2(frase);
