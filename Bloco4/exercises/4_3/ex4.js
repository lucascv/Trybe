// Depois, faça uma pirâmide com n asteriscos de base.

let n = 5;
let space = (n-1)/2;

for (i = 1; i <= n; i += 2) {
    console.log(" ".repeat(space) + "*".repeat(i) + " ".repeat(space));
    space -= 1;
}
