let vetor = [3,15,5]
function final(){
    console.log(`ao todo temos ${vetor.length} numeros`)
    vetor.sort((a, b) => a - b)
    console.log(`o menor numero informado é ${vetor[0]}`)

    let maior = vetor.length
    console.log(`o maior numero informado é ${vetor[maior - 1]}`)


    console.log(vetor)
    let soma = 0
    for(let c = 0; c < vetor.length; c++){
        soma += vetor[c]
    }
    
    console.log(`a soma de todos os numeros é ${soma}`)
    console.log(`a media entre todos os numeros é de ${(soma / vetor.length).toFixed(2)}`)
    //maior 
}
final()