import * as S from './styles';

export default function Wrapper({ title = 'Papo de Bar' }) {
  return (
    <S.Main>
      <S.Brand>{title}</S.Brand>
    </S.Main>
  );
}
