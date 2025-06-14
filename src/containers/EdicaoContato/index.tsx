import { FormEvent, useState } from 'react'
import * as S from '../FormularioNovo/styles'
import { useDispatch, useSelector } from 'react-redux'
import * as enums from '../../utils/enums/contato'
import Contato from '../../models/contato'
import { editar } from '../../store/reducers/contatos'
import { RootReducer } from '../../store'
import { useNavigate, useParams } from 'react-router-dom'
import validacaoTelefone from '../../utils/mask/maskTelefone'

const EdicaoContato = () => {
  const { id } = useParams()
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const contato = itens.find((item) => item.id.toString() === id)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState(contato ? contato.nome : '')
  const [email, setEmail] = useState(contato ? contato.email : '')
  const [telefone, setTelefone] = useState(contato ? contato.telefone : '')
  const [tipo, setTipo] = useState(contato ? contato.tipo : enums.Tipo.AMIGO)
  const idContato = contato ? contato?.id : itens[-1].id + 1

  const EditarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaEditar = new Contato(
      nome,
      email,
      telefone,
      tipo,
      idContato
    )

    dispatch(editar(contatoParaEditar))

    navigate('/')
  }

  return (
    <S.FormContainer onSubmit={EditarContato}>
      <S.FormInput
        type="text"
        placeholder="Nome Completo"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        required
      />
      <S.FormInput
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        required
      />
      <S.FormInput
        type="tel"
        placeholder="(XX) XXXX-XXX"
        value={telefone}
        onChange={(evento) =>
          setTelefone(validacaoTelefone(evento.target.value))
        }
        required
      />
      <S.FormInputRadius
        value={enums.Tipo.AMIGO}
        name="tipo"
        type="radio"
        id="amigo"
        checked={tipo === enums.Tipo.AMIGO}
        onChange={(evento) => setTipo(evento.target.value as enums.Tipo)}
      />{' '}
      <S.FormLabel htmlFor="amigo">Amigo</S.FormLabel>
      <S.FormInputRadius
        value={enums.Tipo.FAMILIA}
        name="tipo"
        type="radio"
        id="familia"
        checked={tipo === enums.Tipo.FAMILIA}
        onChange={(evento) => setTipo(evento.target.value as enums.Tipo)}
      />{' '}
      <S.FormLabel htmlFor="familia">Familía</S.FormLabel>
      <S.FormInputRadius
        value={enums.Tipo.TRABALHO}
        name="tipo"
        type="radio"
        id="trabalho"
        checked={tipo === enums.Tipo.TRABALHO}
        onChange={(evento) => setTipo(evento.target.value as enums.Tipo)}
      />{' '}
      <S.FormLabel htmlFor="trabalho">Trabalho</S.FormLabel>
      <S.BotoesContainer>
        <S.FormBtn type="submit">Salvar</S.FormBtn>
        <S.FormBtnCancelar type="button" onClick={() => navigate('/')}>
          Cancelar
        </S.FormBtnCancelar>
      </S.BotoesContainer>
    </S.FormContainer>
  )
}

export default EdicaoContato
