import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const BtnTipo = styled.button<Props>`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: ${(props) => (props.ativo ? '#2E7D32' : '#4CAF50')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &&:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`
