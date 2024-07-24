





let num = [5,7,3,2,6]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(1) // um valor que não existe, vai retornar -1
if (pos == -1){
    console.log(`o valor não foi encontrado`)
}else{
    console.log(`o valor está na posição ${pos}`)
    
}



/*
//  loop jeito novo

let valores = [5,8,0,2,1,7,4,3]


for(let pos in valores){
    console.log(`a posição ${pos} tem valor de ${valores[pos]}`)
}

*/

/*

    forma "burra"

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
etc

//num.sort()

*/

/*
    quantas posições e primeiro valor

let num = [3, 6 , 8 , 9 , 5]
num.sort()
num.push(7)    // 7 vai aparecer no final porque o sort() estava antes, resumidamente ele deixou de ordem crescente primeiro e depois adicionou + um valor ( 7 )

console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é  ${num[0]}`)

*/

/*
    loop jeito antigo

for(c = 0; c < valores.length;c++){
    console.log(`a posição ${c} tem valor: ${valores[c]}`)
}

*/

