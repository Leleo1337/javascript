function contar(){

    var inicio = 5
    var fim = 133
    var passo = 5

    if(passo == 0){
        passo = 1
        console.log('[ERRO] Impossivel contar, o passo recebe 1')
    }
    if(inicio >= fim){
        console.log('[ERRO] Impossivel contar')
        return
    }


    for(var i = inicio; i <= fim; i += passo){
        console.log(i)
    }
}
contar()