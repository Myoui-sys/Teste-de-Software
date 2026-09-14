const nome: string = "Dacy";
let idade: number = 23;
let verdadeFalso: boolean = true;


function somar(a: number = 0, b: number = 0): number {
  return a + b;
}

const resultado: number = somar();
console.log(resultado);

type Gato = {
  nome: string;
  idade: number;
  vacina: boolean;
  raca: string;
  sexo: string;
  cor: string;
}

const gato1: Gato = {
  nome: "Mero",
  idade: 7,
  vacina: true,
  raca: "SRD",
  sexo: "F",
  cor: "Tricolor"
}

