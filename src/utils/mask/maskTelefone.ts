const validacaoTelefone = (tel: string) => {
  const input = tel.replace(/\D/g, '')
  let formatoInput = ''

  if (input.length > 0) {
    formatoInput = `(${input.substring(0, 2)}`
  }
  if (input.length > 2) {
    formatoInput += `) ${input.substring(2, 7)}`
  }
  if (input.length > 7) {
    formatoInput += `-${input.substring(7, 11)}`
  }
  return formatoInput
}

export default validacaoTelefone
