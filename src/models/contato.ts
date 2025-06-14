import * as enums from '../utils/enums/contato'

class Contato {
  nome: string
  email: string
  telefone: string
  tipo: enums.Tipo
  id: number

  constructor(
    nome: string,
    email: string,
    telefone: string,
    tipo: enums.Tipo,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.tipo = tipo
    this.id = id
  }
}

export default Contato
