function clicar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Preencha todos os campos.')
        res.innerHTML('Impossivel contar. ')
    }else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('[ERRO] passo invalido! Considerando passo 1...')
            p = 1

        }

        if (i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `👉 ${c} `
            }
            res.innerHTML += "👉🏁"    
        }else{
            //contagem decrescente
            for(let c = i ; c >= f; c -= p){
                res.innerHTML += `${c}👈`
            }
        }
        
    }
}