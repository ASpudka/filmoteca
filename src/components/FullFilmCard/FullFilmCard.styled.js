import styled from 'styled-components'

export const Title = styled.h2`
  padding: 0 ${props => props.theme.space[0]}px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xxl};
`

export const Wrapper = styled.li`
  display: flex;
  list-style: none;
  padding:0 ${props => props.theme.space[4]}px;
`
export const FilmImg = styled.img`
  padding: ${props => props.theme.space[0]}px;
  width: 20vw;
  height: 50vh;
`
export const Container = styled.div`

  padding:  0 ${props => props.theme.space[4]}px ${props => props.theme.space[5]}px;
`
export const GenerList = styled.ul`
  margin-bottom: ${props => props.theme.space[4]}px;
  margin-left: -${props => props.theme.space[4]}px;
  font-weight: ${props => props.theme.fontWeights.medium};
`
export const GenerItem = styled.li`
  font-weight: ${props => props.theme.fontWeights.normal};
`
export const Property = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
`
export const Info = styled.p``
