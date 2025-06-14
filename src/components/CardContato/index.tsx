import * as S from './styles'
import { useDispatch } from 'react-redux'
import { remover } from '../../store/reducers/contatos'
import Contato from '../../models/contato'
import { useNavigate } from 'react-router-dom'

type Props = Contato

const CardContato = ({ nome, email, telefone, tipo, id }: Props) => {
  const dispatch = useDispatch()
  const navegate = useNavigate()

  const editarContato = (id: number) => {
    navegate(`/editar/${id}`)
  }

  return (
    <S.Card>
      <S.CardInfo>
        <div>
          <S.InfoContato>{nome}</S.InfoContato>
          <S.InfoContato>{email}</S.InfoContato>
          <S.InfoContato>{telefone}</S.InfoContato>
        </div>
        <S.TagTipo tipo={tipo}>{tipo}</S.TagTipo>
      </S.CardInfo>
      <S.BtnDiv>
        <S.Btn onClick={() => editarContato(id)}>Editar</S.Btn>
        <S.Btn onClick={() => dispatch(remover(id))}>Remover</S.Btn>
      </S.BtnDiv>
    </S.Card>
  )
}

export default CardContato
