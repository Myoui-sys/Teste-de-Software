"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const calculadora_js_1 = require("./calculadora.js");
(0, vitest_1.describe)("calculadora", () => {
    (0, vitest_1.it)("deve somar dois numeros", () => {
        const resultado = (0, calculadora_js_1.soma)(5, 7);
        (0, vitest_1.expect)(resultado).toBe(12);
    });
    (0, vitest_1.it)("deve subtrair dois numeros", () => {
        const resultado = (0, calculadora_js_1.subtracao)(3, 1);
        (0, vitest_1.expect)(resultado).toBe(2);
    });
    (0, vitest_1.it)("deve dividir dois numeros", () => {
        const resultado = (0, calculadora_js_1.divisao)(10, 2);
        (0, vitest_1.expect)(resultado).toBe(5);
    });
    (0, vitest_1.it)("deve multiplicar dois numeros", () => {
        const resultado = (0, calculadora_js_1.multiplicacao)(5, 2);
        (0, vitest_1.expect)(resultado).toBe(10);
    });
});
