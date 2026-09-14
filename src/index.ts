const nome: string = "Dacy";
let idade: number = 23;
let verdadeFalso: boolean = true;


function somar(a: number = 0, b: number = 0): number {
  return a + b;
}

const resultado: number = somar();
console.log(resultado);
