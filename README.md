# Teste de Software

Projeto simples criado para praticar os conceitos iniciais de TypeScript, como
tipagem de variáveis, funções, parâmetros opcionais com valores padrão,
compilação e execução com Node.js.

## O que o projeto faz

O arquivo `src/index.ts` contém exemplos de variáveis dos tipos `string`,
`number` e `boolean`. Ele também possui a função `somar`, que recebe dois
números e retorna a soma deles:

```ts
function somar(a: number = 0, b: number = 0): number {
  return a + b;
}
```

Os dois parâmetros têm o valor padrão `0`. Por isso, quando a função é chamada
sem argumentos, o resultado exibido no terminal é:

```text
0
```

## Instalação desde o início

### 1. Instalar o Node.js

Baixe e instale a versão LTS do [Node.js](https://nodejs.org/). O npm é
instalado automaticamente junto com ele. Este projeto precisa do Node.js 18 ou
superior.

Depois da instalação, feche e abra novamente o terminal e confira se os dois
programas estão disponíveis:

```bash
node --version
npm --version
```

Os comandos devem mostrar as versões instaladas, por exemplo `v20.x.x` para o
Node.js e `10.x.x` para o npm. Os números podem ser diferentes.

### 2. Instalar o Git

Para baixar o projeto pelo terminal, instale o [Git](https://git-scm.com/).
Confirme a instalação com:

```bash
git --version
```

O Git não é necessário se o projeto já estiver salvo no computador ou tiver
sido baixado como arquivo ZIP.

### 3. Baixar o projeto

Clone o repositório e entre na pasta criada:

```bash
git clone https://github.com/Myoui-sys/Teste-de-Software.git
cd Teste-de-Software
```

Se você baixou um ZIP, extraia o arquivo, abra a pasta extraída no terminal e
continue no próximo passo.

### 4. Instalar as dependências

Dentro da pasta que contém o arquivo `package.json`, execute:

```bash
npm install
```

Esse comando lê o `package.json` e instala automaticamente:

- TypeScript, usado para verificar e compilar o código;
- TSX, usado para executar arquivos TypeScript durante o desenvolvimento.

As dependências ficam na pasta `node_modules`. Não é necessário instalar o
TypeScript globalmente no computador.

### 5. Verificar a instalação

Execute a checagem de tipos:

```bash
npm test
```

Se o comando terminar sem mensagens de erro, a instalação está pronta.

## Como criar um projeto igual do zero

Esta seção é opcional. Ela mostra os comandos usados para montar um novo
projeto TypeScript, em vez de baixar este repositório:

```bash
mkdir meu-projeto-typescript
cd meu-projeto-typescript
npm init -y
npm install --save-dev typescript tsx
npx tsc --init
mkdir src
```

Depois, crie o arquivo `src/index.ts`. No `package.json`, configure os comandos:

```json
"scripts": {
  "dev": "tsx src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js",
  "test": "tsc --noEmit"
}
```

No `tsconfig.json`, use `src` como pasta de origem e `dist` como pasta de
saída:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"]
}
```

## Como executar

Para executar o arquivo TypeScript diretamente durante o desenvolvimento:

```bash
npm run dev
```

Para compilar o TypeScript e depois executar o JavaScript gerado:

```bash
npm run build
npm start
```

O comando de compilação transforma `src/index.ts` em `dist/index.js`.

## Como verificar o código

Para verificar os tipos sem gerar novos arquivos:

```bash
npm test
```

Esse comando usa o compilador TypeScript para identificar erros de tipagem.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm install` | Instala as dependências do projeto. |
| `npm run dev` | Executa o código TypeScript diretamente. |
| `npm run build` | Compila os arquivos de `src` para `dist`. |
| `npm start` | Executa o JavaScript compilado. |
| `npm test` | Verifica se existem erros de TypeScript. |

## Estrutura do projeto

```text
.
|-- src/
|   `-- index.ts
|-- dist/
|   `-- index.js
|-- package.json
|-- package-lock.json
|-- tsconfig.json
`-- README.md
```

- `src`: contém o código-fonte em TypeScript;
- `dist`: contém o JavaScript gerado pela compilação;
- `package.json`: define as dependências e os comandos do projeto;
- `tsconfig.json`: contém as configurações do compilador TypeScript.
