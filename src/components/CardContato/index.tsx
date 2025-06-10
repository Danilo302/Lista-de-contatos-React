import { Card, InfoContato, Btn, TagTipo } from './styles'
import { useDispatch } from 'react-redux'
import { remover } from '../../store/reducers/contatos'
import Contato from '../../models/contato'

type Props = Contato

const CardContato = ({ nome, email, telefone, tipo, id }: Props) => {
  const dispatch = useDispatch()

  return (
    <Card>
      <InfoContato>{nome}</InfoContato>
      <InfoContato>{email}</InfoContato>
      <InfoContato>{telefone}</InfoContato>
      <TagTipo tipo={tipo}>{tipo}</TagTipo>
      <Btn>Editar</Btn>
      <Btn onClick={() => dispatch(remover(id))}>Remover</Btn>
    </Card>
  )
}

export default CardContato
