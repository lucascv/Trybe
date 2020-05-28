// Função que cria as opções do ComboBox com os estados do Brasil
function criarEstados() {
  let estadosBrasileiros = {
    ac: 'Acre',
    al: 'Alagoas',
    ap: 'Amapá',
    am: 'Amazonas',
    ba: 'Bahia',
    ce: 'Ceará',
    es: 'Espírito Santo',
    go: 'Goiás',
    ma: 'Maranhão',
    mt: 'Mato Grosso',
    ms: 'Mato Grosso do Sul',
    mg: 'Minas Gerais',
    pa: 'Pará',
    pb: 'Paraíba',
    pr: 'Parańa',
    pe: 'Pernambuco',
    pi: 'Piauí',
    rj: 'Rio de Janeiro',
    rn: 'Rio Grande do Norte',
    rs: 'Rio Grande do Sul',
    ro: 'Rondônia',
    rr: 'Roraima',
    sc: 'Santa Catarina',
    sp: 'São Paulo',
    se: 'Sergipe',
    to: 'Tocantins',
    df: 'Distrito Federal'
  }   
  for (index in estadosBrasileiros) {
    const elemento = document.createElement('option');
    elemento.value = index;
    elemento.innerText = estadosBrasileiros[index];
    document.querySelector('#estado').appendChild(elemento);
  } 
}

criarEstados();

// Funcao do botao limpar
btnLimpar = document.querySelector('#limpar');
btnLimpar.addEventListener('click', function () {
  elementosInput = document.querySelectorAll('input');
  for (let i = 0; i < elementosInput.length; i += 1) {
    elementosInput[i].value = '';
  }
  elementosText = document.querySelectorAll('textarea');
  for (let i = 0; i < elementosText.length; i += 1) {
    elementosText[i].value = '';
  }
});
