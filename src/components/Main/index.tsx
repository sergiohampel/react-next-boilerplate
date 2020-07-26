import * as S from './styles';

export const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado ao lado"
    />
    <S.Title>Sérgio Hampel</S.Title>
    <S.Description>Typescript, React, NextJS e Styled Components</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor sentado de frente para uma tela com códigos"
    />
  </S.Wrapper>
);
