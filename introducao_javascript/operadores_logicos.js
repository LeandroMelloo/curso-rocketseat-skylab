let sexo = 'M'
let idade = 18

// AND ou E => todas condições tem que ser verdadeira pra ele ser TRUE
if(sexo === 'M' && idade >= 23) {
    console.log('Ele é do sexo masculino e tem idade maior ou igual a 18')
} else {
    console.log('Error')
}

// OR ou OU => uma condição tem que ser verdadeira pra ele ser TRUE
if(sexo === 'F' || idade >= 23) {
    console.log('Ele é do sexo masculino e tem idade maior ou igual a 18')
} else {
    console.log('Error')
}

// NOT ou NÃO 
if(sexo !== 'F') {
    console.log('Ele é do sexo masculino')
} else {
    console.log('Error')
}

let carro = 'Velho' // => false

let condicao = carro === 'Novo'

console.log(condicao)