import styled from 'styled-components'

export const FilmList = styled.ul`
  display: flex;
  flex-wrap:wrap;
  /* justify-content: space-around; */
  background-color: ${props => props.theme.colors.backdropBackground};
  margin: 0 5%;
`