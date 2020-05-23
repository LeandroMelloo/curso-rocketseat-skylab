let sexo = 'M'

let resultado = (sexo === 'F') ? 'Masculino' : 'Feminino'
console.log(resultado)

function retornarSexo(sexo) {
    let sexo1 = 'F'
    return (sexo1 === 'F') ? 'Masculino' : 'Feminino'
}

const resultadoSexo = retornarSexo('M')
console.log(resultadoSexo)