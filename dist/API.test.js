"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const API_1 = require("./API");
(0, vitest_1.describe)("Testes de integração da API", () => {
    (0, vitest_1.it)("deve buscar um post", async () => {
        const response = await (0, API_1.buscarPost)(1);
        (0, vitest_1.expect)(response.status).toBe(200);
        const body = await response.json();
        (0, vitest_1.expect)(body.id).toBe(1);
    });
    (0, vitest_1.it)("deve criar um post", async () => {
        const response = await (0, API_1.criarPost)();
        (0, vitest_1.expect)(response.status).toBe(201);
        const body = await response.json();
        (0, vitest_1.expect)(body.title).toBe("Teste com Vitest");
    });
    (0, vitest_1.it)("deve atualizar um post", async () => {
        const response = await (0, API_1.atualizarPost)(1);
        (0, vitest_1.expect)(response.status).toBe(200);
        const body = await response.json();
        (0, vitest_1.expect)(body.title).toBe("Título atualizado");
    });
    (0, vitest_1.it)("deve deletar um post", async () => {
        const response = await (0, API_1.deletarPost)(1);
        (0, vitest_1.expect)(response.status).toBe(200);
    });
});
