/*
Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:
1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.
2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.
4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.
*/

const userIsBackendOrFrontEnd = prompt('Você quer seguir para a area de front-End(responda 1) ou você quer ir para a area de Back-End(responda 2)?')

if(userIsBackendOrFrontEnd == '1') {
    alert('Que legal você pode aprender, react, vue ou angular por exemplo.')
}else if(userIsBackendOrFrontEnd == '2') {
alert('Para a área de back-end existem varias linguagens como C# e Java.')
}else{
    alert('resposta invalida')
}

function userTecnologies() {
    const userWantToBeFullstack = prompt('Você quer ser full-Stack?')
    const userTecArr = []

    const userTec = 'Quais tecnologias você gostaria de aprender?'
    for(let i = true; i !== null; i = prompt(userTec)) {
        userTecArr.push(i)
    }

    
    userTecArr.shift()
    document.body.innerHTML = `<p>${userTecArr}</p>`
}

userTecnologies()