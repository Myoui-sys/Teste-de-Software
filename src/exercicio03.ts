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

    const response = await fetch(
        "https://viacep.com.br/ws/01001000/json/"
    );

    const dados = await response.json() as cep;

    return dados;

}


async function buscarCepExemplo() {

    const dados = await buscarCep();

    console.log(dados);

}

buscarCepExemplo();


async function criarCep(): Promise<cep> {

    const response = await fetch(
        "https://viacep.com.br/ws/01001000/json/",
        {

            method: "post",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                cep: "01001000",

                logradouro: "Praça da Sé",

                complemento: "",

                unidade: "",

                bairro: "Sé",

                localidade: "São Paulo",

                uf: "SP",

                estado: "São Paulo",

                regiao: "Sudeste",

                ibge: "3550308",

                gia: "1004",

                ddd: "11",

                siafi: "7107"

            })

        }
    );

    const dados = await response.json() as cep;

    return dados;

}


async function apagarcep(): Promise<void> {

    const response = await fetch(
        "https://viacep.com.br/ws/01001000/json/",
        {

            method: "delete"

        }
    );

    if (response.ok) {

        console.log("Cep apagado com sucesso");

    } else {

        console.log("Erro ao apagar o cep");

    }

}