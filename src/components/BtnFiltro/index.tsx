import { useDispatch } from 'react-redux'
import { BtnTipo } from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/contato'

type Props = { legenda: string; tipo: enums.Tipo | 'todos' }

const BtnFiltro = ({ legenda, tipo }: Props) => {
  const dispatch = useDispatch()

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        tipo: tipo
      })
    )
  }

  return <BtnTipo onClick={filtrar}>{legenda}</BtnTipo>
}

export default BtnFiltro
