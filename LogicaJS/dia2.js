const nome = prompt("Qual o seu nome?");
const idade = prompt("Qual a sua idade?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(
  `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`
);

const pergunta = prompt(`Você gosta de estudar ${linguagem}? Responda com 1 para SIM ou 2 para NÃO`)
if (pergunta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
} else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}
