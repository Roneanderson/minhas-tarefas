import * as S from './styles'
// import tudo(*) como(S) from 'styles'

//tipagem props
// ? opcional
export type props = {
  ativo?: boolean
  contador: number
  legenda: string
}

// legenda e contador foi omitido no styles.ts pelo omit

const FiltroCard = ({ ativo, contador, legenda }: props) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)

export default FiltroCard
