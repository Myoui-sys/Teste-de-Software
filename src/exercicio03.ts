// Arrays
const frutas: string[] = ["Uva", "Maçã", "Banana", "Pera", "Laranja"];

// Objeto
let newJeans = {
    integrante1: "Minji",
    integrante2: "Hanni",
    integrante3: "Danielle",
    integrante4: "Haerin",
    integrante5: "Hyein"
};

// Função assíncrona
async function cafe(): Promise<string> {
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


// API

type cep = {
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    regiao: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

async function buscarCep(): Promise<cep> {
    const response = await fetch ("https://viacep.com.br/ws/01001000/json/");
    const dados = await response.json() as cep;
    return dados;
}

async function buscarCepExemplo() {
    const resultadoAguardado = await buscarCep();
    console.log(resultadoAguardado);
}

buscarCepExemplo();