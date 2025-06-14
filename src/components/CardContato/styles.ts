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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`
export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InfoContato = styled.h3`
  margin: 4px 0;
  color: #333;
  font-size: 14px;

  &:first-child {
    font-weight: bold;
    font-size: 16px;
    color: #2c3e50;
  }
`
export const BtnDiv = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
`

export const Btn = styled.button`
  color: #ffffff;
  width: 120px;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:first-child {
    background-color: #ffc107;
    color: #212529;

    &:hover {
      background-color: #e0a800;
    }
  }

  &:last-child {
    background-color: #dc3545;
    color: white;

    &:hover {
      background-color: #c82333;
    }
  }
`
export const TagTipo = styled.span<TagProps>`
  color: #ffffff;
  background-color: ${(props) => retornaCorTag(props)};
  display: flex;
  height: 24px;
  width: 100px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`
