/* 
    Nome do Projeto: Challenge Amigo Secreto
    Author:Marina Cruz de Souza
    Data de Criação: 2025-03-18 07:14H
    Descrição:Aplicação que permita inserir nome e
    exibilo em uma lista, para sorteá-lo
*/


// Lista para armazenar os nomes
let amigos = [];


// Adicionar nomes
function adicionarNome() 
{
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
function validarEntrada(nome) 
{
    if (nome === '') 
    {
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



//Exibir a lista com os nomes inseridos ao decorrer dos que vão sendo adicionados
function visualizarLista()
{
    let lista = document.getElementById('resultado');
    lista.innerHTML = '';   

    for(let i=0;i<amigos.length;i++)
    {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);

    }

}
//Clicar no botão para sortear um nome aleatoriamente 
function sortearAmigo()
{
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let nomeSorteado=document.getElementById('resultado');
    nomeSorteado.innerHTML=`Seu amigo secreto será ${sorteado}`;

    
 

}

//Limpar o campo de texto
function limparCampo()
{
    document.getElementById('amigo').value = '';
}