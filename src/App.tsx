import React from 'react'
import HeaderBusca from './containers/HeaderBusca'
import ListaContatos from './containers/ListaContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <HeaderBusca />
        <ListaContatos />
      </Container>
    </>
  )
}

export default App
