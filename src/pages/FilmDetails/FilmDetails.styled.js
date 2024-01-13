import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const WrapperBtn = styled.div`
  text-align: center;
`
export const Button = styled.button`
  background-color: ${props => props.theme.colors.navBcg};
  padding: ${props => props.theme.space[4]}px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.ml} px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.basketItem};
  &.active {
    background-color: ${props => props.theme.colors.hoverBtn};
    color: ${props => props.theme.colors.backdropBackground};
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: ${props => props.theme.colors.hoverBtn};
    color: ${props => props.theme.colors.spanText};
  }
`

export const Detail = styled.div`
  list-style: none;
  padding: ${props => props.theme.space[4]}px;
  text-align: center;
`
export const DetailLink = styled(NavLink)`
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.space[3]}px ${props => props.theme.space[4]}px;
  background-color: ${props => props.theme.colors.hoverBtn};
  text-decoration: none;
  &.active {
    background-color: ${props => props.theme.colors.navBcg};
    color: ${props => props.theme.colors.backdropBackground};
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: ${props => props.theme.colors.navBcg};
    color: ${props => props.theme.colors.spanText};
  }
`
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const Item = styled.li`
  list-style: none;
`
export const CastImg= styled.img`
   padding: ${props => props.theme.space[0]}px;
  width: 200px;
  height: 300px;
`