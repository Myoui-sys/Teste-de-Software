"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarPost = buscarPost;
exports.criarPost = criarPost;
exports.atualizarPost = atualizarPost;
exports.deletarPost = deletarPost;
const baseUrl = "https://jsonplaceholder.typicode.com/posts";
async function buscarPost(id) {
    const response = await fetch(`${baseUrl}/${id}`);
    return response;
}
async function criarPost() {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: 1,
            title: "Teste com Vitest",
            body: "Teste de integração"
        })
    });
    return response;
}
async function atualizarPost(id) {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            userId: 1,
            title: "Título atualizado",
            body: "Conteúdo atualizado"
        })
    });
    return response;
}
async function deletarPost(id) {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE"
    });
    return response;
}
