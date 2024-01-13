import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.li`
  display: flex;

  width: 20vw;
  border: ${props => props.theme.borders.navBorder};
`
export const FilmLink = styled(NavLink)`
display: flex;
flex-direction:column;
  outline: none;
  text-decoration: none;
`

export const FilmTitle = styled.h2`
flex-grow:1;
margin-bottom:${props=>props.theme.space[0]}px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xl};
  text-decoration: none;
  &.active {
    color: ${props => props.theme.colors.hoverBtn};
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    color: ${props => props.theme.colors.hoverBtn};
  }
`
export const FilmImg=styled.img`
 padding:${props=>props.theme.space[0]}px;
 width: 20vw;
 height: 60vh;
`

export const FilmInfo = styled.div`
display:flex;
justify-content:space-around;
 padding: 0 px ;
`