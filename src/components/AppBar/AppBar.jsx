import React from 'react'
import { mainNav } from '../../helpers/mainNav'
import * as SC from './AppBar.styled'

export default function AppBar () {
  return (
    <SC.NavWrapper>
      <SC.Title>Film library</SC.Title>
      <SC.NavList>
        {mainNav.map(({ href, text, id }) => (
          <SC.NavItem key={id}>
            <SC.NavItemLink to={href}>{text}</SC.NavItemLink>
          </SC.NavItem>
        ))}
      </SC.NavList>
    </SC.NavWrapper>
  )
}
