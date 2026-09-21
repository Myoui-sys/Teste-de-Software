"use strict";
// Arrays
const frutas = ["Uva", "Maçã", "Banana", "Pera", "Laranja"];
// Objeto
let newJeans = {
    integrante1: "Minji",
    integrante2: "Hanni",
    integrante3: "Danielle",
    integrante4: "Haerin",
    integrante5: "Hyein"
};
// Função assíncrona
async function cafe() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("café pronto");
        }, 5000);
    });
}
async function cafeexemplo() {
    const resultado = cafe();
    console.log(resultado);
    const resultadoAguardando = await cafe();
    console.log(resultadoAguardando);
}
cafeexemplo();
async function buscarCep() {
    const response = await fetch("https://viacep.com.br/ws/01001000/json/");
    const dados = await response.json();
    return dados;
}
async function buscarCepExemplo() {
    const resultadoAguardado = await buscarCep();
    console.log(resultadoAguardado);
}
buscarCepExemplo();
