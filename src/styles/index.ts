import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`
export const TitleMain = styled.h2`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`

export default EstiloGlobal
