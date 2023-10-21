//criar um jogo do número secreto com 3 tentativas
const secretNumber = Math.floor(Math.random() * 10);

alert('vamos começar o jogo do número secreto, o número está entre 0 e 10 e você tem 3 chances para acertar')

for(i = 0; i < 3; i++) {

    let userAnswer = prompt('Qual seu palpite?')
    let remainingAttempts = 3 - (i + 1)

    if (userAnswer !== null) {

        if(userAnswer == secretNumber) {
            alert(`Você acertou o número realmente era ${secretNumber}!`)
            break

        } else {

            alert(`você errou, mas tem mais ${remainingAttempts} chances`)
            if( i == 2) {
                alert(`como você não descobriu o número aqui está a resposta ${secretNumber}`)

            }
        }
    } else {

        alert('resposta invalida')
        break
        
    }
}