const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export async function buscarPost(id: number) {
    const response = await fetch(`${baseUrl}/${id}`);

    return response;
}

export async function criarPost() {
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

export async function atualizarPost(id: number) {
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

export async function deletarPost(id: number) {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE"
    });

    return response;
}