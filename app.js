//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//declaração de variável lista de nome de amigos
let amigos=[];

//Implemnetar função para  inserir nome de amigo
function inserirNome()
{
    let nomeInserido=document.querySelector('input').value;
    validarEntrada(nomeInserido);
    

    


}
//Implemnetar função para validar Entrada
function validarEntrada(nome)
{
    if(nome=='')
    {
     alert("Por favor,insira um nome.");
     return false;
    }
    return true;
}