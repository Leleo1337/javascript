const res = document.getElementById('res')
let vetor = []

function adicionar(){
    const lista = document.getElementById('list')
    const item = document.createElement('li')
    const numero = document.getElementById('numero')
    
    const n = Number(numero.value)
    
    if (numero.value.length == 0 || vetor.indexOf(n) !== -1){
        alert('[ERRO]Coloque um Numero valido ou Valor já Z')
    }else if(n > 100){
        alert('[ERRO]Coloque um numero entre 0 a 100')
    }else{
        res.innerHTML = ''
        let conteudo = document.createTextNode(`Numero ${n} adicionado`)
        item.appendChild(conteudo)
        lista.appendChild(item)
        item.id = 'r'

        vetor.push(n)
        vetor.sort((a, b) => a - b) // Ordenar numericamente

    }
}

function finalizar(){
    let maior = vetor.length
    let soma = 0

    if(vetor.length == 0){
        alert('[ERRO]Adicione numeros entre 0 a 100 acima!')
    }else{
        res.innerHTML = `Ao todo temos ${vetor.length} numeros cadastrados <br>`
        
        res.innerHTML += `O menor numero cadastrado é ${vetor[0]} <br>`
        res.innerHTML += `O maior numero cadastrado é ${vetor[maior - 1]} <br>`
        
       
        for(let c = 0; c < vetor.length; c++){
            soma += vetor[c]
        }
        res.innerHTML += `A soma de todos os numeros cadastrados é de ${soma} <br>`

        res.innerHTML += `A media dos valores cadastrados é de ${(soma / vetor.length).toFixed(2)}`

        console.log('F'+vetor)
    }
}

function reiniciar(){
    vetor = []
    res.innerHTML = ''
    
    for(let c = 0; c < 100; c++){
    const remove = document.getElementById('r').remove()
    }
}


