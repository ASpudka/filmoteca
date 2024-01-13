import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavWrapper = styled.div`
  background-color: ${props => props.theme.colors.navBcg};
  padding: ${props => props.theme.space[3]}px 0;
  
`
export const Title = styled.h1`
font-size:${props=>props.theme.fontSizes.xl};
color:${props=>props.theme.colors.text};

`
export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  
`
export const NavItem = styled.li`
padding:${props=>props.theme.space[3]}px;
border:${props=>props.theme.borders.navBorder};
list-style: none;
`
export const NavItemLink = styled(NavLink)`
color:${props=>props.theme.colors.text};
padding:${props=>props.theme.space[3]}px ${props=>props.theme.space[4]}px; 

text-decoration: none;
&.active{
  background-color: ${props => props.theme.colors.hoverBtn};
   color: ${props => props.theme.colors.backdropBackground}}

&:hover:not(.active),
&:focus:not(.active){
  background-color: ${props => props.theme.colors.hoverBtn};
  color: ${props => props.theme.colors.spanText};
 
}
`
