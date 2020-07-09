class Pen {
  constructor(point, color, ink = 100) {
    this.point = point;
    this.color = color;
    this.ink = ink;
  }

  loseInk(quant) {
    this.ink -= quant;
  }

  sign() {
    this.loseInk(10);
    return `'I've signed a text with a ${this.color} pen. charge: ${this.ink}%'`;
  }

  wroteText(string) {
    this.loseInk(string.length);
    return `${string}. charge: ${this.ink}%`;
  }
}

const myPen = new Pen (0.7, 'black');

console.log(myPen.sign()); // 'I've signed a text with a black pen. charge: 90%'

console.log(myPen.wroteText('Teste2'));
