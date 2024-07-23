function contar(){
    var inicio = document.getElementById('ini').value
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var msg = document.getElementById('msg')
    

    // outra variavel para fazer a verificação 
    var ini = Number(inicio)



    msg.innerHTML = 'Contando... <br>'
    
    if(inicio.length == 0 || fim <= ini || ini < 0){
        msg.innerHTML = '[ERRO]Preencha os campos/Impossivel contar'

        return
    }
    if (passo == 0 ){
        passo = 1
        window.alert(`Impossivel contar, o passo recebe: ${passo}`)
    }
    for (ini; ini <= fim; ini += passo){
        msg.innerHTML += (`👉 ${ini} `)
    }  
        msg.innerHTML +=('👉 🏁')

}