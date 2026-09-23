"use strict";
// Arrays
const frutas = ["Uva", "Maçã", "Banana", "Pera", "Laranja"];
// Objeto
let newJeans = {
    integrante1: "Minji",
    integrante2: "Hanni",
    integrante3: "Danielle",
    integrante4: "Haerin",
    integrante5: "Hyein",
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
// GET - Buscar endereço pelo CEP
// Request: CEP pela URL
// Response: dados do endereço
// Finalidade: consultar um endereço pelo CEP
async function buscarCep(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = (await response.json());
    return dados;
}
async function exemploCep() {
    const resultado = await buscarCep("01001000");
    console.log(resultado);
}
exemploCep();
// GET - Buscar CEP pelo endereço
// Request: UF, cidade e rua pela URL
// Response: lista de endereços
// Finalidade: encontrar CEPs pelo endereço
async function buscarEndereco(uf, cidade, rua) {
    const response = await fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`);
    const dados = (await response.json());
    return dados;
}
async function exemploEndereco() {
    const resultado = await buscarEndereco("PE", "Recife", "Boa Vista");
    console.log(resultado);
}
exemploEndereco();
// POST
// A ViaCEP não possui endpoint POST.
// Ela utiliza GET para consultar informações de CEP.
