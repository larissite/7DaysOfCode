const areaTech = prompt("Você deseja seguir com a área 'Frontend' ou 'Backend'? Digite sua escolha!");
let aprendizado = ""

if(areaTech === 'Frontend'){
    aprendizado = prompt("Deseja aprender 'React' ou 'Vue'? Digite sua escolha!")
} else if(areaTech === 'Backend'){
    aprendizado = prompt("Deseja aprender C# ou Java?")
} else {
    alert("Ops... confira sua opção!")
}

const especialistaOuFullstack = prompt("Digite 1 para seguir especialização na área escolhida ou 2 caso queira se tornar Fullstack!")
if(especialistaOuFullstack == 1){
    alert(`Siga sua especialização em ${aprendizado} para se tornar desenvolvedor ${areaTech}!`)
}
else if (especialistaOuFullstack == 2){
    alert(`Aprimore seus estudos além de ${areaTech} para se tornar Fullstack!`)
}
else{
    alert("Ops... algo deu errado! Confira se digitou um valor válido!")
}

let mensagem = prompt("Há mais tecnologias que deseja aprender? Digite 'Sim' ou 'Não'.")

while (mensagem === 'Sim'){
    let tech = prompt("Que maravilha! Qual?")
    alert(`${tech} é muito interessante! Bons estudos!`)
    prompt("Há mais tecnologias que deseja aprender? Digite 'sim' ou 'não'.")
}
   
  

