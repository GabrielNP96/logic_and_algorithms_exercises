//criar uma lista de compras
//criar a opcção de remover itens da lesta
const frutas = []
const congelados = []
const alimentosGerais = []
const produtosDeLimpeza = []
const todosOsProdutos = [frutas, congelados, alimentosGerais, produtosDeLimpeza]
let itemParaDeletar

let perguntaAddItemLista = true

while(perguntaAddItemLista == true){

    if(frutas.length > 0 || congelados.length > 0 || alimentosGerais.length > 0 || produtosDeLimpeza.length > 0) {
        const deletarItem = confirm('Deseja deletar um item?')
        if(deletarItem == true) {

            let localizarItem = prompt('digite apenas o número que indica a seção do item : (1)frutas, (2)congelados, (3)alimentosGerais, (4)produtos de limpeza')
            if(localizarItem > 0 <= 4) {
                switch(localizarItem) {
                    case '1':
                        itemParaDeletar = prompt(`escreva igual está salvo o item a ser deletado: ${frutas.join(', ')}`)
                        if(frutas.includes(itemParaDeletar)) {
                            let index = frutas.indexOf(itemParaDeletar)
                            frutas.splice(index, 1)
                        } else {
                            alert('comando invalido...')
                        }
                        break
                    case '2':
                        itemParaDeletar = prompt(`escreva igual está salvo o item a ser deletado: ${congelados.join(', ')}`)
                        if(congelados.includes(itemParaDeletar)) {
                            let index = congelados.indexOf(itemParaDeletar)
                            congelados.splice(index, 1)
                        }
                        break
                    case '3':
                        itemParaDeletar = prompt(`escreva igual está salvo o item a ser deletado: ${alimentosGerais.join(', ')}`)
                        if(alimentosGerais.includes(itemParaDeletar)) {
                            let index = alimentosGerais.indexOf(itemParaDeletar)
                            alimentosGerais.splice(index, 1)
                        }
                        break
                    case '4':
                        itemParaDeletar = prompt(`escreva igual está salvo o item a ser deletado: ${produtosDeLimpeza.join(', ')}`)
                        if(produtosDeLimpeza.includes(itemParaDeletar)) {
                            let index = produtosDeLimpeza.indexOf(itemParaDeletar)
                            produtosDeLimpeza.splice(index, 1)
                        }
                        break      
                        
                }

            } else {
                alert('comando inavalido...')
            }
        }

    }

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