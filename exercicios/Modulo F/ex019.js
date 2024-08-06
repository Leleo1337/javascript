let amigo = {nome: 'josé', 
sexo: 'M', 
peso: '88.5',
engordar(p = 0){
    this.peso += p
}
}

amigo.engordar(2)

console.log(`o ${amigo.nome} pesa ${amigo.peso}KG`)