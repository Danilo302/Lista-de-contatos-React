import { useDispatch, useSelector } from 'react-redux'
import { BtnTipo } from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/contato'
import { RootReducer } from '../../store'

type Props = { legenda: string; tipo: enums.Tipo | 'todos' }

const BtnFiltro = ({ legenda, tipo }: Props) => {
  const dispatch = useDispatch()
  const { filtro } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoTipo = filtro.tipo === tipo

    return mesmoTipo
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        tipo: tipo
      })
    )
  }
  const ativo = verificaEstaAtivo()

  return (
    <BtnTipo ativo={ativo} onClick={filtrar}>
      {legenda}
    </BtnTipo>
  )
}

export default BtnFiltro
