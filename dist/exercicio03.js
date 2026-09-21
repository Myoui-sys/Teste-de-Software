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
async function cafe() {
    return "café pronto";
}
async function cafeexemplo() {
    const resultado = cafe();
    console.log(resultado);
    const resultadoAguardando = await cafe();
    console.log(resultadoAguardando);
}
cafeexemplo();
