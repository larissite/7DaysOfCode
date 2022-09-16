const random = Math.floor(Math.random() * (10 - 0 + 1) + 0 );

let guess = ''
let correct = false

for (let i = 0; i < 3; i++){
    guess = prompt("Tente adivinhar o número de 0 a 10!")
    if(guess == random){
        alert(`Acertou! O número era ${random}!`)
        correct = true;
    } alert("Ops... tente novamente!")
}

if(!correct){
    alert(`Melhor sorte da próxima vez... o número era ${random}!`)
}