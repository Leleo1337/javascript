var idade = 63

console.log("você tem " + idade + " anos")

if (idade < 16) {
    console.log('não vota!')
} else if (idade < 18 || idade > 65) {
    console.log('vota, opcional.')
} else if (idade >= 18){
    console.log('vota, obrigatorio.')
}


