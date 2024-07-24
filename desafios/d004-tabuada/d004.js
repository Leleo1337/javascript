function gerar(){
    const num = document.getElementById ('numero')   
    const list = document.getElementById ('lista')

    if (num.value.length == 0){
        window.alert('[ERRO] Coloque um numero abaixo.')
    }else{
        let n = Number(num.value)
        list.innerHTML = ''
        for(var i = 0; i <= 10; i++){
            let res = n * i
            let item = document.createElement('li')
            let conteudo = document.createTextNode(`${n} x ${i} = ${res}`)

            item.appendChild(conteudo)
            list.appendChild(item)
        }
        
    }
}