//criar uma lista de compras
const frutas = []
const congelados = []
const alimentosGerais = []
const produtosDeLimpeza = []
const listaDeCompras = []
let perguntaAddItemLista = true

while(perguntaAddItemLista == true){
    perguntaAddItemLista = confirm('Você deseja adcionar algo a sua lista de compras?')



    if(perguntaAddItemLista === true) {

        const qualTipoDeItem = prompt ('Agora informe o tipo do item: digite 1 para frutas, 2 para congelados, 3 para alimentos gerais, 4 para produtos de limpeza.') 

        if(qualTipoDeItem == null || qualTipoDeItem > 4) {

            alert('comando invalido...')
    } else {
        const nomeDoProduto = prompt('Digite o nome do produto')

        if(nomeDoProduto != null) {

            switch(qualTipoDeItem) {
            case '1':
                frutas.push(nomeDoProduto)
                break
            case '2':
                congelados.push(nomeDoProduto)
                break
            case '3':
                alimentosGerais.push(nomeDoProduto)
                break
            case '4':
                produtosDeLimpeza.push(nomeDoProduto)
                break
            }

        } else {
            alert('comando invalido...') 
        }
    }
    } }

document.body.innerHTML = `Frutas : ${frutas.join(', ')} </br> congelados: ${congelados.join(', ')} </br> Alimentos Gerais: ${alimentosGerais.join(', ')} </br> Produtos de Limpeza: ${produtosDeLimpeza.join(', ')}`