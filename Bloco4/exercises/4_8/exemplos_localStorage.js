// salva os dados sem data de expiração. Os dados não serão removidos quando o browser for 
// fechado, ou seja, eles ficarão disponíveis enquanto não forem explicitamente removidos.

console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem("firsname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
localStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
console.log(localStorage.getItem("lastname")) // retorna o valor "Smith"
console.log(localStorage.length) // possui duas entradas, então o retorno é o valor: 2
localStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
console.log(localStorage.length) // possui uma entrada, então o retorno é o valor: 1
localStorage.clear() // limpa todas as entradas salvas em localStorage
console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
