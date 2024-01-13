import styled from 'styled-components'

export const Title = styled.p`
  padding: ${props => props.theme.space[5]}px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xl}px;
`

export const Container = styled.div`
  padding: 0 ${props => props.theme.space[4]}px
    ${props => props.theme.space[5]}px;
  text-align: center;
`
export const Wrapper = styled.ul`
  display: flex;
  flex-wrap:wrap;
  list-style: none;
  padding:0 ${props => props.theme.space[4]}px;
`