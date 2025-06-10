import React from 'react'
import HeaderBusca from './containers/HeaderBusca'
import ListaContatos from './containers/ListaContatos'
import EstiloGlobal, { Container } from './styles'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <HeaderBusca />
        <ListaContatos />
      </Container>
    </Provider>
  )
}

export default App
