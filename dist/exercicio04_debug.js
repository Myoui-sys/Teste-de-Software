"use strict";
// Trecho 1
// Objetivo: imprimir os números de 1 até 10.
function imprimirNumeros() {
    for (let i = 1; i < 10; i++) { // ERRO: Vai imprimir até 9, deveria ser i <= 10 para imprimir até 10.
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
