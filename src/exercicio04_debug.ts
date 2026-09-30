// Trecho 1
// Objetivo: imprimir os números de 1 até 10.

function imprimirNumeros(): void {
    for (let i = 1; i < 10; i++) { // ERRO: Vai imprimir até 9, porque ali tem que rodar até ser menor que 10, deveria ser i <= 10 para imprimir até 10.
        console.log(i);
    }
}

imprimirNumeros();

// Trecho 2
// Objetivo: contar de 0 até o usuário digitar 5, então parar

// ERRO: Onde está o comando que pede pro usuário digitar no terminal?
function contarAte5(): void {
    let contador = 0;
    while (contador !== 5) {
        console.log(contador);
        contador = contador + 2;
    }
} // ERRO: O código vai dar loop infinito.

contarAte5();

// Trecho 3
// Objetivo: percorrer o array e imprimir cada nome.

function imprimirNomes(): void {
    const nomes: string[] = ["Ana", "Bruno", "Carla"];
    for (let i = 0; i <= nomes.length; i++) {
        console.log(nomes[i]);
    }
}

// Trecho 4
// Objetivo: somar todos os preços de um array de números.

function somarPrecos(): number {
    const precos: number[] = [10, 25, 30, 15];
    let total = 0;
    for (let preco in precos) {
        total += preco;
    }
    return total;
}

console.log(somarPrecos());

// Trecho 5
// Objetivo: disparar 3 avisos com 1 segundo de intervalo, mostrando "Aviso 0", "Aviso 1", "Aviso 2".

function dispararAvisos(): void {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log("Aviso " + i);
        }, 1000);
    }
}

dispararAvisos();

// Trecho 6
// Objetivo: imprimir um triângulo de asteriscos com 5 linhas, onde a linha 1 tem 1 asterisco, a linha 2 tem 2, e assim por diante até a linha 5 com 5 asteriscos.

function imprimirTriangulo(): void {
    const totalLinhas = 5;

    for (let linha = 1; linha <= totalLinhas; linha++) {
        let linhaTexto = "";

        for (let coluna = 1; coluna < linha; coluna++) {
            linhaTexto += "*";
        }

        console.log(linhaTexto);
    }
}

imprimirTriangulo();

// Trecho 7 
// Objetivo: percorrer um array de números e parar assim que encontrar o primeiro número par, imprimindo esse número.

function encontrarPrimeiroPar(): void {
    const numeros: number[] = [7, 9, 4, 11, 8, 15, 4];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            continue;
        }
        console.log("Primeiro par encontrado: " + numeros[i]);
    }
}

encontrarPrimeiroPar();

// Trecho 8 
// Objetivo: verificar se todos os itens de um carrinho têm estoque disponível. Se algum item não tiver, deve imprimir "Carrinho invalido" e parar a verificação; setodos tiverem, deve imprimir "Carrinho valido".

interface ItemCarrinho {
    nome: string;
    quantidadeEstoque: number;
}

function validarCarrinho(): void {
    const carrinho: ItemCarrinho[] = [
        { nome: "Teclado", quantidadeEstoque: 3},
        { nome: "Mouse", quantidadeEstoque: 0},
        { nome: "Monitor", quantidadeEstoque: 5}
    ];
   carrinho.forEach ((item) => {
    if (item.quantidadeEstoque === 0 ) {
        console.log("Carrinho invalido");
        return;
    }
   });

   console.log("Carrinho valido");

}

validarCarrinho();

// Trecho 9
// Objetivo: fazer uma contagem regressiva de 3 até 1, imprimindo cada número, e depois "Fim!".

function contagemRegressiva(): void {
    let numero = 3;

    do {
        console.log(numero);
        numero--;
    } while (numero >= 0);

    console.log("Fim!");
}

contagemRegressiva();

// Trecho 10
// Objetivo: calcular o produto de todos os números de um array (multiplicar todos entre si).

function calcularProduto(): number {
    const numeros: number[] = [2, 3, 4, 5];
    let produto = 0;

    for (let i = 0; i < numeros.length; i++) {
        produto *= numeros[i];
    }

    return produto;
}

console.log(calcularProduto());

