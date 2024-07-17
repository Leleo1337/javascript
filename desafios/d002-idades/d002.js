function verificar(){
    var data = new Date()
    var ano = data.getFullYear ()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('.txt')
    var img = document.querySelector('#img')

    if (fano.value < 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''



        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade <= 10){
                //criança
                img.src = 'img/homem-crianca.png'
            }
            if(idade >= 11 && idade < 18){
                //adolescente
                img.src = 'img/homem-adolescente.png'
            }
            if (idade >= 18 && idade < 65 ){
                //jovem
                img.src = 'img/homem-jovem.png'
            }
            if (idade >= 65 && idade <= 125){
                img.src = 'img/homem-idoso.png'
            }

        } else {
            genero = 'mulher'
            if (idade >= 0 && idade <= 10){
                img.src = 'img/mulher-crianca.png'
            }
            if(idade >= 11 && idade < 18){
                img.src = 'img/mulher-adolescente.png'
            }
            if(idade >= 18 && idade < 65){
                img.src = 'img/mulher-jovem.png'
            }
            if (idade >= 65 && idade <= 125){
                img.src = 'img/mulher-idosa.png'
            }

        }
    }
    
    switch(idade){
        case 0 :
            res.innerHTML = (`detectamos ${genero} com alguns meses de vida`)
            break
        default:
            res.innerHTML = (`detectamos ${genero} com ${idade} anos`)
            break
    }

}
