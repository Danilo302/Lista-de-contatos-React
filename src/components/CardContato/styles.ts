import styled from 'styled-components'
import * as enums from '../../utils/enums/contato'

type TagProps = {
  tipo?: enums.Tipo
}

function retornaCorTag(props: TagProps) {
  if (props.tipo === enums.Tipo.TRABALHO) return '#9b111e'
  if (props.tipo === enums.Tipo.FAMILIA) return '#008000'
  if (props.tipo === enums.Tipo.AMIGO) return '#054f77'
}

export const Card = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Segoe UI', Arial, sans-serif;
  border: 1px solid #e0e0e0;
`
export const InfoContato = styled.h2`
  font-size: 14px;
`
export const Btn = styled.button`
  background-color: #ffffff;
`
export const TagTipo = styled.span<TagProps>`
  color: #ffffff;
  background-color: ${(props) => retornaCorTag(props)};
`
