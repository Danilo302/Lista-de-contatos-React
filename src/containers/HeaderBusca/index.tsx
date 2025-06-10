import { useDispatch, useSelector } from 'react-redux'
import BtnFiltro from '../../components/BtnFiltro'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/contato'
import { BtnContainer, HeaderContainer } from './styles'

const HeaderBusca = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <HeaderContainer>
      <h1>Lista de Contatos</h1>
      <input
        type="text"
        placeholder="Pesquisar"
        value={termo}
        onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
      />
      <BtnContainer>
        <BtnFiltro tipo="todos" legenda="Todos" />
        <BtnFiltro tipo={enums.Tipo.FAMILIA} legenda="Familía" />
        <BtnFiltro tipo={enums.Tipo.AMIGO} legenda="Amigos" />
        <BtnFiltro tipo={enums.Tipo.TRABALHO} legenda="Trabalho" />
      </BtnContainer>
    </HeaderContainer>
  )
}

export default HeaderBusca
