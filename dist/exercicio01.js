"use strict";
// 1. Declare uma variável para cada tipo primitivo básico do TypeScript (string, number, boolean), atribuindo valores de sua escolha. 
Object.defineProperty(exports, "__esModule", { value: true });
const nome = "Dacy";
let idade = 23;
let matriculada = true;
// 2. Tente declarar uma variável do tipo number e atribuir a ela um valor do tipo string (ex: "vinte"). O que o TypeScript acusa? Anote o erro em comentário. 
let nomeExercicio = "Nome"; // Type 'string' is not assignable to type 'number', ou seja, o typescript percebeu que o tipo primitivo está declarado errado.
// 3. Crie uma variável idade: number e escreva uma estrutura condicional (if/else) que exiba "Maior de idade" se for maior ou igual a 18, e "Menor de idade" caso contrário. 
let idade1 = 34;
if (idade1 >= 18) {
    console.log("Maior de idade");
}
else {
    console.log("Menor de idade");
}
// 4. Crie uma variável nota: number e utilize if / else if / else para classificar a nota em "Aprovado" (nota >= 7), "Recuperação" (nota >= 5 e < 7) ou "Reprovado" (nota < 5). 
let nota = 9;
if (nota >= 7) {
    console.log("Aprovado");
}
else if (nota >= 5 && nota < 7) {
    console.log("Em recuperação");
}
else {
    console.log("Reprovado");
}
// 5. Crie uma variável diaDaSemana: number (1 a 7) e utilize um switch para exibir o nome do dia correspondente. 
let diaDaSemana = 5;
switch (diaDaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Inexistente");
}
// 6. Utilize um loop for para exibir no console os números de 1 a 10. 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// 7. Utilize um loop while para exibir apenas os números pares entre 1 e 20. 
let numeroPar = 2;
while (numeroPar <= 20) {
    console.log(numeroPar);
    numeroPar += 2; // Soma 2 a cada repetição
}
// 8. Crie um array numeros: number[] com pelo menos 5 valores e utilize um loop for...of para somar todos os elementos, exibindo o total ao final. 
const numeros = [5, 4, 3, 2, 1];
let soma = 0;
for (const numero of numeros) {
    soma += numero;
}
console.log(soma);
// 9. Utilize um loop for combinado com uma condicional para exibir apenas os números ímpares entre 1 e 15. 
for (let i = 1; i < 16; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
// 10. Desafio: combine tudo o que foi visto — crie um array de números, percorra com um loop e, para cada número, utilize uma condicional para classificá-lo como "par" ou "ímpar", exibindo o resultado no console.
let combinado = [10, 40, 11, 34, 33, 80, 83, 103, 58, 180, 287, 11, 2, 36, 89, 90];
for (const numero of combinado) {
    if (numero % 2 != 0) {
        console.log(numero, " : ímpar");
    }
    else {
        console.log(numero, " : par");
    }
}
