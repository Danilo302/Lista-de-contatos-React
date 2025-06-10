import CardContato from '../../components/CardContato'
import * as enums from '../../utils/enums/contato'

const contatos = [
  {
    nome: 'Danilo Felix',
    email: 'danilofelix@gamil.com',
    telefone: 21999999999,
    tipo: enums.Tipo.FAMILIA
  },
  {
    nome: 'Peter Parker',
    email: 'parkepeter@gamil.com',
    telefone: 21988888888,
    tipo: enums.Tipo.AMIGO
  },
  {
    nome: 'Bruce Wayne',
    email: 'batman@gamil.com',
    telefone: 21977777777,
    tipo: enums.Tipo.TRABALHO
  }
]

const ListaContatos = () => (
  <main>
    <ul>
      {contatos.map((c) => (
        <li key={c.telefone}>
          <CardContato
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

export default ListaContatos
