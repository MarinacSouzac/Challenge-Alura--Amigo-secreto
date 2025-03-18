# Challenge Amigo Secreto

## Descrição
Aplicação que permite inserir nomes, exibi-los em uma lista e sorteá-los aleatoriamente para um jogo de amigo secreto.

## Autor
**Marina Cruz de Souza**

## Data de Criação
18 de março de 2025 - 07:14H

## Funcionalidades
- Adicionar nomes à lista.
- Evitar nomes duplicados.
- Exibir a lista de participantes.
- Sortear um amigo secreto aleatoriamente.
- Limpar o campo de entrada.

## Tecnologias Utilizadas
- **HTML** para estrutura da página.
- **CSS** para estilização.
- **JavaScript** para interatividade.

## Como Executar o Projeto
1. Clone o repositório ou copie os arquivos para seu computador.
2. Abra o arquivo `index.html` em um navegador.
3. Digite um nome no campo de entrada e clique no botão para adicionar.
4. Para realizar o sorteio, clique no botão de "Sortear Amigo".

## Estrutura do Código(Parte Interativa)
```javascript
// Lista para armazenar os nomes
let amigos = [];

// Adicionar nomes
function adicionarNome() {
    let nome = document.getElementById('amigo').value.trim();
    let nomeValidado = validarEntrada(nome);
    
    if (nomeValidado) {
        amigos.push(nome);
        alert('Nome adicionado com sucesso!');
        visualizarLista();
        limparCampo();
    }
}

// Validar se o campo input está vazio ou se o nome já existe
function validarEntrada(nome) {
    if (nome === '') {
        alert('Por favor, insira um nome!');
        return false;
    }
    
    if (amigos.includes(nome)) {
        alert('Nome já existe!');
        visualizarLista();
        limparCampo();
        return false;
    }
    return true;
}

// Exibir a lista com os nomes inseridos
function visualizarLista() {
    let lista = document.getElementById('resultado');
    lista.innerHTML = '';   

    for(let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Sortear um amigo secreto aleatoriamente
function sortearAmigo() {
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let nomeSorteado = document.getElementById('resultado');
    nomeSorteado.innerHTML = `Seu amigo secreto será ${sorteado}`;
}

// Limpar o campo de texto
function limparCampo() {
    document.getElementById('amigo').value = '';
}
```

## Possíveis Problemas e Soluções
| Problema | Solução |
|----------|----------|
| O campo de entrada aceita valores vazios | Implementada validação para impedir entradas vazias. |
| Nome repetido pode ser adicionado | A função `validarEntrada()` verifica e impede repetição. |
| Nome Permanecer no campo input | Criar uma função `limparCampo()` para limpar após a conclusão. |
| Sorteio pode ocorrer sem nomes na lista | Reforçar a verificação antes de realizar o sorteio. |


## Licença
Este projeto é de uso livre para fins educacionais e pessoais. 🚀

