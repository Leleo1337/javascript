


function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `horas.`

    if (hora >= 0 && hora < 12){
        //manha
        img.src = 'img/manha.png'

        msg.innerHTML = `bom dia! agora sao ${hora} boras e ${min} minutos`
        document.body.style.background ='#93A6C7'
    }else if (hora >=12 && hora < 18){
        //tarde
        img.src = 'img/tarde.png'

        msg.innerHTML = `boa tarde! agora sao ${hora} horas e ${min} minutos`
        document.body.style.background = '#D9AACE';
    }else{
        //noite
        img.src = 'img/noite.png'

        msg.innerHTML = `boa noite! agora sao ${hora} horas e ${min} minutos`
        document.body.style.background = '#264D7C';
        
    }
}