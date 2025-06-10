import { useSelector } from 'react-redux'
import CardContato from '../../components/CardContato'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/contato'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, tipo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (tipo === enums.Tipo.AMIGO) {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.tipo === enums.Tipo.AMIGO
        )
      } else if (tipo === enums.Tipo.FAMILIA) {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.tipo === enums.Tipo.FAMILIA
        )
      } else if (tipo === enums.Tipo.TRABALHO) {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.tipo === enums.Tipo.TRABALHO
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  return (
    <main>
      <ul>
        {filtraContatos().map((c) => (
          <li key={c.telefone}>
            <CardContato
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
              tipo={c.tipo}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default ListaContatos
