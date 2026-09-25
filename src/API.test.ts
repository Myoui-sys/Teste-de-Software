import { describe, it, expect } from "vitest";
import {
    buscarPost,
    criarPost,
    atualizarPost,
    deletarPost
} from "./API";

describe("Testes de integração da API", () => {

    it("deve buscar um post", async () => {
        const response = await buscarPost(1);

        expect(response.status).toBe(200);

        const body = await response.json();

        expect(body.id).toBe(1);
    });

    it("deve criar um post", async () => {
        const response = await criarPost();

        expect(response.status).toBe(201);

        const body = await response.json();

        expect(body.title).toBe("Teste com Vitest");
    });

    it("deve atualizar um post", async () => {
        const response = await atualizarPost(1);

        expect(response.status).toBe(200);

        const body = await response.json();

        expect(body.title).toBe("Título atualizado");
    });

    it("deve deletar um post", async () => {
        const response = await deletarPost(1);

        expect(response.status).toBe(200);
    });

});