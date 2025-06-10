import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contato'
import * as enums from '../../utils/enums/contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Tony Stark',
      email: 'ironman@gmail.com',
      telefone: 21978888888,
      tipo: enums.Tipo.TRABALHO
    },
    {
      id: 2,
      nome: 'Gerald de Rivia',
      email: 'geraldao@gmail.com',
      telefone: 21975588888,
      tipo: enums.Tipo.AMIGO
    },
    {
      id: 3,
      nome: 'Clark Kent',
      email: 'superman@gmail.com',
      telefone: 21973338888,
      tipo: enums.Tipo.FAMILIA
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer
