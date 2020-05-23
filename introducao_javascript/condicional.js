function retornaSexo(sexo) {
  // M ou F => retorna Feminino ou Masculino dependendo do parametro
  if (sexo === 'M')
    return 'Masculino'
  else if (sexo === 'F')
    return 'Feminino'
  else {
    return 'Sexo indefinido'
  }
}
const resultado = retornaSexo('M')
console.log(resultado)

function retornaSexoSwitch(sexo) {
  switch (sexo) {
    case 'M':
      return 'Masculino'
    case 'F':
      return 'Feminino'
    default:
      return 'Outros'
  }
}
const sexo = retornaSexoSwitch('rioegio')
console.log(sexo) 