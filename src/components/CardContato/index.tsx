import { Card, InfoContato, Btn, TagTipo } from './styles'
import * as enums from '../../utils/enums/contato'

type Props = {
  nome: string
  email: string
  telefone: number
  tipo: enums.Tipo
}

const CardContato = ({ nome, email, telefone, tipo }: Props) => (
  <Card>
    <InfoContato>{nome}</InfoContato>
    <InfoContato>{email}</InfoContato>
    <InfoContato>{telefone}</InfoContato>
    <TagTipo tipo={tipo}>{tipo}</TagTipo>
    <Btn>Editar</Btn>
    <Btn>Remover</Btn>
  </Card>
)

export default CardContato
