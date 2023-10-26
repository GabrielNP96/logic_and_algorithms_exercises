// criar uma calculadora optei por criar usando prompt e alert visto que é um exercico de lógica.

alert('bem vindo a nossa calculadora, vamos calcular!');

        
        let firstUserNumber = prompt('Digite um número: ')
            firstUserNumber = Number(firstUserNumber)

        let userOperation = prompt('Digite um sinal matematico +, -, / ou * : ')

        let secondUserNumber = prompt('Digite outro número: ')
            secondUserNumber = Number(secondUserNumber)

        function sum(firstNumber, secondNumber) {
            alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`)
        }

        function subtraction(firstNumber, secondNumber) {
            alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`)
        }

        function divison(firstNumber, secondNumber) {
            alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`)
        }

        function multiplication (firstNumber, secondNumber) {
            alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`)
        }

        function equation (userOperation, firstNumber, secondNumber) {
            if(userOperation == '+' || userOperation == '-' || userOperation == '/' || userOperation == '*') {

                userOperation = userOperation

                switch(userOperation) {
                    case '+':
                        sum(firstNumber,secondNumber)
                        break
                    case '-':
                        subtraction(firstNumber,secondNumber)
                        break
                    case '/':
                        divison(firstNumber,secondNumber)
                        break
                    case '*':
                        multiplication(firstNumber,secondNumber)
                        break

                }

            alert('recarregue a pagina para fazer um novo calculo')
            }else {
                alert('algo de errado não está certo')
            }
        }
        equation(userOperation, firstUserNumber, secondUserNumber)
