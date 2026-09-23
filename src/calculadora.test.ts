import { describe, it, expect } from 'vitest';
import { soma, subtracao, divisao, multiplicacao } from './calculadora.js';

describe("calculadora", () => {

    it("deve somar dois numeros", () => {
        const resultado = soma(5, 7);
        expect(resultado).toBe(12);
    });
    it ("deve subtrair dois numeros", () => {
        const resultado = subtracao(3, 1);
        expect(resultado).toBe(2);
    })
    it ("deve dividir dois numeros", () => {
        const resultado = divisao(10, 2);
        expect(resultado).toBe(5);
    })
    it ("deve multiplicar dois numeros", () => {
        const resultado = multiplicacao(5, 2);
        expect(resultado).toBe(10);
    })
    
});