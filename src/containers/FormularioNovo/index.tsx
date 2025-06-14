import { FormEvent, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/contato'
import Contato from '../../models/contato'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

const FormularioNovo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [tipo, setTipo] = useState(enums.Tipo.AMIGO)

  const CadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(nome, email, telefone, tipo, 9)

    dispatch(cadastrar(contatoParaAdicionar))

    navigate('/')
  }

  return (
    <S.FormContainer onSubmit={CadastrarContato}>
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
        onChange={(evento) => setTelefone(evento.target.value)}
        required
      />
      <S.FormInputRadius
        value={enums.Tipo.AMIGO}
        name="tipo"
        type="radio"
        id="amigo"
        onChange={(evento) => setTipo(evento.target.value as enums.Tipo)}
      />{' '}
      <S.FormLabel htmlFor="amigo">Amigo</S.FormLabel>
      <S.FormInputRadius
        value={enums.Tipo.FAMILIA}
        name="tipo"
        type="radio"
        id="familia"
        onChange={(evento) => setTipo(evento.target.value as enums.Tipo)}
      />{' '}
      <S.FormLabel htmlFor="familia">Familía</S.FormLabel>
      <S.FormInputRadius
        value={enums.Tipo.TRABALHO}
        name="tipo"
        type="radio"
        id="trabalho"
        onChange={(evento) => setTipo(evento.target.value as enums.Tipo)}
      />{' '}
      <S.FormLabel htmlFor="trabalho">Trabalho</S.FormLabel>
      <S.BotoesContainer>
        <S.FormBtn type="submit">Cadastrar</S.FormBtn>
        <S.FormBtnCancelar type="button" onClick={() => navigate('/')}>
          Cancelar
        </S.FormBtnCancelar>
      </S.BotoesContainer>
    </S.FormContainer>
  )
}

export default FormularioNovo
