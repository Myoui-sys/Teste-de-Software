"use strict";
// Trecho 1
// Objetivo: imprimir os números de 1 até 10.
function imprimirNumeros() {
    for (let i = 1; i < 10; i++) { // ERRO: Vai imprimir até 9, porque ali tem que rodar até ser menor que 10, deveria ser i <= 10 para imprimir até 10.
        console.log(i);
    }
}
imprimirNumeros();
// Trecho 2
// Objetivo: contar de 0 até o usuário digitar 5, então parar
// ERRO: Onde está o comando que pede pro usuário digitar no terminal?
function contarAte5() {
    let contador = 0;
    while (contador !== 5) {
        console.log(contador);
        contador = contador + 2;
    }
} // ERRO: O código vai dar loop infinito.
contarAte5();
// Trecho 3
// Objetivo: percorrer o array e imprimir cada nome.
function imprimirNomes() {
    const nomes = ["Ana", "Bruno", "Carla"];
    for (let i = 0; i <= nomes.length; i++) { // ERRO: O <= faz o loop tentar acessar também o índice 3, que não existe. O correto seria i < nomes.length.
        console.log(nomes[i]);
    }
}
// ERRO: A função imprimirNomes foi criada, mas não foi chamada, então os nomes não serão impressos.
// Trecho 4
// Objetivo: somar todos os preços de um array de números.
function somarPrecos() {
    const precos = [10, 25, 30, 15];
    let total = 0;
    for (let preco in precos) { // ERRO: O for...in percorre os índices do array, e não os preços. O correto seria usar for...of.
        total += preco;
    }
    return total;
}
console.log(somarPrecos());
// Trecho 5
// Objetivo: disparar 3 avisos com 1 segundo de intervalo, mostrando "Aviso 0", "Aviso 1", "Aviso 2".
function dispararAvisos() {
    for (var i = 0; i < 3; i++) { // ERRO: Como i foi declarado com var, os callbacks usam o mesmo i e imprimem "Aviso 3". Deveria ser usado let.
        setTimeout(() => {
            console.log("Aviso " + i);
        }, 1000); // ERRO: Todos os avisos são agendados para o mesmo instante. O tempo deveria variar, por exemplo (i + 1) * 1000.
    }
}
dispararAvisos();
// Trecho 6
// Objetivo: imprimir um triângulo de asteriscos com 5 linhas, onde a linha 1 tem 1 asterisco, a linha 2 tem 2, e assim por diante até a linha 5 com 5 asteriscos.
function imprimirTriangulo() {
    const totalLinhas = 5;
    for (let linha = 1; linha <= totalLinhas; linha++) {
        let linhaTexto = "";
        for (let coluna = 1; coluna < linha; coluna++) { // ERRO: O < faz cada linha ter um asterisco a menos e deixa a primeira linha vazia. Deveria ser coluna <= linha.
            linhaTexto += "*";
        }
        console.log(linhaTexto);
    }
}
imprimirTriangulo();
// Trecho 7 
// Objetivo: percorrer um array de números e parar assim que encontrar o primeiro número par, imprimindo esse número.
function encontrarPrimeiroPar() {
    const numeros = [7, 9, 4, 11, 8, 15, 4];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            continue;
        }
        console.log("Primeiro par encontrado: " + numeros[i]);
        // ERRO: Falta um break após encontrar o número par. Sem ele, o loop continua e imprime todos os números pares.
    }
}
encontrarPrimeiroPar();
function validarCarrinho() {
    const carrinho = [
        { nome: "Teclado", quantidadeEstoque: 3 },
        { nome: "Mouse", quantidadeEstoque: 0 },
        { nome: "Monitor", quantidadeEstoque: 5 }
    ];
    carrinho.forEach((item) => {
        if (item.quantidadeEstoque === 0) {
            console.log("Carrinho invalido");
            return; // ERRO: Este return encerra somente a função do forEach, não a função validarCarrinho nem a verificação do carrinho.
        }
    });
    console.log("Carrinho valido"); // ERRO: Esta mensagem será impressa mesmo depois de encontrar um item sem estoque. Um for...of permitiria encerrar validarCarrinho com return.
}
validarCarrinho();
// Trecho 9
// Objetivo: fazer uma contagem regressiva de 3 até 1, imprimindo cada número, e depois "Fim!".
function contagemRegressiva() {
    let numero = 3;
    do {
        console.log(numero);
        numero--;
    } while (numero >= 0); // ERRO: A condição inclui o 0 na contagem. Para imprimir apenas de 3 até 1, deveria ser numero >= 1.
    console.log("Fim!");
}
contagemRegressiva();
// Trecho 10
// Objetivo: calcular o produto de todos os números de um array (multiplicar todos entre si).
function calcularProduto() {
    const numeros = [2, 3, 4, 5];
    let produto = 0; // ERRO: Qualquer número multiplicado por 0 continua sendo 0. O produto deveria começar em 1.
    for (let i = 0; i < numeros.length; i++) {
        produto *= numeros[i];
    }
    return produto;
}
console.log(calcularProduto());
// Trecho 11
// Objetivo: imprimir a tabuada do 7, de "7 x 1 = 7" até "7 x 10 = 70".
function imprimirTabuadaDe7() {
    const numero = 7;
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
        i++; // ERRO: O i já é incrementado pelo for. Este segundo i++ faz o código pular os multiplicadores pares.
    }
}
imprimirTabuadaDe7();
// Trecho 12
// Objetivo: remover todos os números pares de um array, mantendo só os ímpares.
function removerPares() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            numeros.splice(i, 1); // ERRO: Ao remover um item, o próximo ocupa o mesmo índice, mas o i avança e pode pular esse item. Isso falha se houver números pares consecutivos.
        }
    }
    return numeros;
}
console.log(removerPares());
// Trecho 13
// Objetivo: percorrer um array de trás para frente, do último elemento até o primeiro, imprimindo cada um.
function imprimirDoFim() {
    const numeros = [10, 20, 30, 40];
    for (let i = numeros.length; i >= 0; i--) { // ERRO: numeros.length é 4, mas o último índice é 3. Por isso, o primeiro valor impresso será undefined. Deveria começar em numeros.length - 1.
        console.log(numeros[i]);
    }
}
imprimirDoFim();
// Trecho 14
// Objetivo: imprimir todas as coordenadas (linha, coluna) de uma grade 3x3, tipo "(0, 0)", "(0, 1)", "(0, 2)", "(1, 0)", e assim por diante.
function imprimirGrade() {
    for (let i = 0; i < 3; i++) {
        for (let i = 0; i < 3; i++) { // ERRO: O segundo loop também declara i e esconde o i do primeiro loop. Deveria usar outra variável, como j, para representar a coluna.
            console.log("(" + i + ", " + i + ")"); // ERRO: O mesmo i é usado para linha e coluna, então não são impressas todas as combinações da grade.
        }
    }
}
imprimirGrade();
// Trecho 15
// Objetivo: coletar 5 números pares a partir de uma lista de candidatos.
function coletarPares() {
    const candidatos = [1, 3, 5, 7, 9, 11]; // ERRO: A lista não possui nenhum número par, então pares.length nunca chegará a 5.
    const pares = [];
    let i = 0;
    while (pares.length < 5) { // ERRO: O loop será infinito. O índice ultrapassa o tamanho do array e a condição para encerrar nunca é atingida.
        if (candidatos[i] % 2 === 0) {
            pares.push(candidatos[i]);
        }
        i++;
    }
    return pares;
}
console.log(coletarPares());
// Trecho 16
// Objetivo: imprimir cada nome de um array junto com seu índice, no formato "0: Ana".
function imprimirComIndice() {
    const nomes = ["Ana", "Bruno", "Carla"];
    for (const [nome, indice] of nomes.entries()) { // ERRO: entries() retorna [índice, valor], mas as variáveis foram colocadas na ordem contrária. Deveria ser [indice, nome].
        console.log(indice + ": " + nome);
    }
}
imprimirComIndice();
// Trecho 17
// Objetivo: juntar os nomes de um array numa única string separada por vírgula, sem vírgula sobrando no final. Resultado esperado: "Ana, Bruno, Carla".
function juntarNomes() {
    const nomes = ["Ana", "Bruno", "Carla"];
    let resultado = "";
    for (let i = 0; i < nomes.length; i++) {
        resultado += nomes[i] + ", "; // ERRO: A vírgula e o espaço também são adicionados depois do último nome, deixando uma vírgula sobrando no final.
    }
    return resultado;
}
console.log(juntarNomes());
