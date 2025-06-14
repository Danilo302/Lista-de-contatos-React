import styled from 'styled-components'

export const FormContainer = styled.form`
  max-width: 500px;
  margin: 20px auto;
  padding: 25px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`
export const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
  transition: border-color 0.3s;

  &&:focus {
    border-color: #4a90e2;
    outline: none;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.3);
  }
`
export const FormInputRadius = styled.input`
  margin-right: 5px;
  transform: scale(1.1);

  &&:checked + label {
    color: #2c3e50;
    font-weight: bold;
  }
`
export const FormLabel = styled.label`
  margin-right: 15px;
  font-size: 15px;
  color: #555;
  cursor: pointer;
`
export const BotoesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`
export const FormBtn = styled.button`
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #4caf50;
  color: white;

  &&:hover {
    background-color: #3e8e41;
    transform: translateY(-2px);
  }
`
export const FormBtnCancelar = styled(FormBtn)`
  background-color: #f44336;

  &&:hover {
    background-color: #d32f2f;
    transform: translateY(-2px);
  }
`
