import * as S from './styles'

const FormularioNovo = () => (
  <S.FormContainer>
    <S.FormInput type="text" placeholder="Nome Completo" />
    <S.FormInput type="email" placeholder="E-mail" />
    <S.FormInput type="tel" placeholder="(XX) XXXX-XXX" />
    <S.FormInputRadius name="tipo" type="radio" id="amigo" />{' '}
    <S.FormLabel htmlFor="amigo">Amigo</S.FormLabel>
    <S.FormInputRadius name="tipo" type="radio" id="familia" />{' '}
    <S.FormLabel htmlFor="familia">Familía</S.FormLabel>
    <S.FormInputRadius name="tipo" type="radio" id="trabalho" />{' '}
    <S.FormLabel htmlFor="trabalho">Trabalho</S.FormLabel>
  </S.FormContainer>
)

export default FormularioNovo
